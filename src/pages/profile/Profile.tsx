/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Chart } from 'primereact/chart'

import { Card } from '../../components/shared/card/Card'

import './profile.scss'

import { uploadImage } from '@/api/services'
import { EditUserForm } from '@/components/profile/editUserForm/EditUserForm'
import { RoutinesTable } from '@/components/routines/routinesTable/RoutinesTable'
import { RoutineCounters } from '@/components/shared/routineCounters/RoutineCounters'
import { BASE_URL } from '@/constants/server'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { getUserInfoAction } from '@/store/userSlice'

export const Profile = () => {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  const { t } = useTranslation()
  const user = useAppSelector((state) => state.user.user)
  const routines = useAppSelector((state) => state.routines.ownRoutines)
  const inputRef = useRef<any>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserInfoAction())
    const documentStyle = getComputedStyle(document.documentElement)
    const data = {
      labels: [
        t('main.profile.chart.value_1'),
        t('main.profile.chart.value_2'),
      ],
      datasets: [
        {
          data: [
            routines.filter((routine) => routine.published).length,
            routines.filter((routine) => !routine.published).length,
          ],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
          ],
        },
      ],
    }
    const options = {
      cutout: '60%',
    }

    setChartData(data)
    setChartOptions(options)
  }, [routines, t])

  return (
    <section className="profile-container flex">
      <div className="">
        <Card
          title="main.profile.banner.title"
          className="">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:flex-row items-center px-5 py-10 gap-3 ">
              <img
                onError={(e: any) => {
                  e.target.src = `${BASE_URL}/uploads/default.png`
                }}
                className="hover:cursor-pointer hover:scale-105 transition-all"
                // eslint-disable-next-line no-confusing-arrow
                onClick={() =>
                  inputRef.current ? inputRef.current.click() : null
                }
                src={`${BASE_URL}/uploads/${user.profilePictureName}`}
                alt="Foto de perfil"
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
              <input
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={async (e) => {
                  if (e.target.files && e.target.files[0]) {
                    const formData = new FormData()
                    formData.append('file', e.target.files[0])
                    await uploadImage(formData, user.id)
                    window.location.reload()
                  }
                }}
                type="file"
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />
              <h2 className="text-5xl md:text-5xl px-10 gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
                <p>{t('main.profile.banner.greeting')}</p>
                {user.name?.toUpperCase()}
              </h2>
            </div>
            <RoutineCounters className="flex-col w-full lg:w-1/2" />
          </div>
        </Card>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 pb-2">
        <Card title="main.profile.edit_form.title">
          <EditUserForm user={user} />
        </Card>
        <Card title="main.routines.table.title">
          <RoutinesTable />
        </Card>
        <Card title="main.profile.chart.title">
          <Chart
            type="doughnut"
            data={chartData}
            options={chartOptions}
            className="w-full md:w-30rem"
          />
        </Card>
      </div>
    </section>
  )
}
