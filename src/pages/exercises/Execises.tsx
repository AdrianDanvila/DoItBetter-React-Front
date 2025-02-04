import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import { API_BASE_URL } from '@/api/constants'
import { Card } from '@/components/shared/card/Card'
import { BASE_URL } from '@/constants/server'
import { onImageLoadError } from '@/lib/utils'
import { Exercise } from '@/types/interfaces'

const Execises = () => {
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
          <div className="flex flex-col items-center gap-2">
            <img
              className="rounded-lg"
              onError={onImageLoadError}
              width={300}
              src={`${BASE_URL}/uploads${exercise.photo}`}
              alt=""
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-xl">{t(exercise.name)}</h2>
              <p>{t(exercise.description)}</p>
            </div>
          </div>
        </Card>
      ))}
    </section>
  )
}
export default Execises
