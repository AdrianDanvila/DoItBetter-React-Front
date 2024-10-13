import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Chart } from 'primereact/chart'

import { Card } from '../../components/shared/card/Card'

import './profile.scss'

import { uploadImage } from '@/api/services'
import { EditUserForm } from '@/components/profile/editUserForm/EditUserForm'
import { RoutinesTable } from '@/components/routines/routinesTable/RoutinesTable'
import { useAppSelector } from '@/helpers/hooks'

export const Profile = () => {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  const user = useAppSelector((state) => state.user.user)
  const inputRef = useRef()
  useEffect(() => {
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
  }, [])

  return (
    <section className="profile-container">
      <Card
        title="Profile Info"
        className="profile-container__data">
        <div className="parent">
          <div className="div1">
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
                  const response2 = await uploadImage(formData, user.id)
                }
              }}
              type="file"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
          <div className="div2">2</div>
        </div>
      </Card>

      <Card
        title="Profile Info"
        className="profile-container__form">
        <EditUserForm user={user} />
      </Card>

      <Card
        title="Titulo"
        className="profile-container__chart">
        <Chart
          className="h-full"
          type=""
          data={chartData}
          options={chartOptions}
        />
      </Card>

      <Card
        title="Titulo"
        className="profile-container__chart2 flex items-center justify-center">
        <RoutinesTable />
      </Card>
    </section>
  )
}
