import { useEffect, useState } from 'react'
import { Chart } from 'primereact/chart'

import { Card } from '../../components/shared/card/Card'

import './profile.scss'

export const Profile = () => {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})

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
        className="item">
        <div className="bg-black">
          <img />
        </div>
      </Card>

      <Card
        title="Titulo"
        className="item-2">
        <Chart
          className="h-60"
          type="line"
          data={chartData}
          options={chartOptions}
        />
      </Card>

      <Card
        title="Titulo"
        className="item-2">
        <Chart
          className="h-60"
          type="line"
          data={chartData}
          options={chartOptions}></Chart>
      </Card>
    </section>
  )
}
