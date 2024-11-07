/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { Chart } from 'primereact/chart'

import { Card } from '../../components/shared/card/Card'

import './profile.scss'

import { uploadImage } from '@/api/services'
import { EditUserForm } from '@/components/profile/editUserForm/EditUserForm'
import { RoutinesTable } from '@/components/routines/routinesTable/RoutinesTable'
import { RoutineCounters } from '@/components/shared/routineCounters/routineCounters'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { getUserInfoAction } from '@/store/userSlice'

export const Profile = () => {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  const user = useAppSelector((state) => state.user.user)
  const inputRef = useRef<any>()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserInfoAction())

    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--text-color')
    const textColorSecondary = '#000000'
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border')
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 100],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
      ],
    }
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    }

    setChartData(data)
    setChartOptions(options)
  }, [dispatch])

  return (
    <section className="profile-container flex">
      <div className="">
        <Card
          title="Profile Info"
          className="">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:flex-row items-center px-5 py-10 gap-3">
              <img
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.click()
                  }
                }}
                src={`http://localhost:8081/uploads/${user.profilePictureName}`}
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
                accept="image/png, image/gif, image/jpeg"
              />
              <h2 className="text-5xl md:text-5xl px-10 gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
                <p>Welcome back</p>
                {user.name?.toUpperCase()}
              </h2>
            </div>
            <RoutineCounters className="flex-col w-full lg:w-1/2" />
          </div>
        </Card>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 pb-2">
        <Card title="Profile Info">
          <EditUserForm user={user} />
        </Card>
        <Card
          title="Titulo"
          className="flex items-center justify-center">
          <RoutinesTable />
        </Card>
      </div>
    </section>
  )
}
