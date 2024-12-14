import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import { API_BASE_URL } from '@/api/constants'
import { Card } from '@/components/shared/card/Card'
import { Exercise } from '@/types/interfaces'

export const Execises = () => {
  const [exercises, setExercises] = useState([])
  const { t } = useTranslation()
  useEffect(() => {
    const a = async () => {
      await axios
        .get(`${API_BASE_URL.EXERCISE}`)
        .then((response) => setExercises(response.data.data))
        .catch((error) => error.data)
    }
    a()
  }, [])

  return (
    <section className=" flex flex-col lg:flex-row gap-5 px-10">
      {exercises?.map((exercise: Exercise) => (
        <Card
          key={exercise.id}
          title={exercise.name}>
          <img
            width={300}
            src="${BASE_URL}/default.png"
            alt=""
          />
          <p>{t(exercise.name)}</p>
          <p>{t(exercise.description)}</p>
        </Card>
      ))}
    </section>
  )
}
