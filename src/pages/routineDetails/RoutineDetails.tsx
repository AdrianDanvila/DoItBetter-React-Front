/* eslint-disable react/jsx-key */
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { PaperPlaneIcon } from '@radix-ui/react-icons'

import { ExercisesDataView } from '@/components/routineDetails/exercisesDataView/ExercisesDataView'
import { Card } from '@/components/shared/card/Card'
import { Button } from '@/components/ui/button'
import { BASE_URL } from '@/constants/server'
import { isUndefined } from '@/helpers'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { PATH, ROUTE_PATH } from '@/router/constants'
import { addCommentAction, getExercises } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'
export const RoutinesDetails = () => {
  const values = useAppSelector((state) => state.routines)
  const user = useAppSelector((state) => state.user.user)
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const textRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    const fun = async () => {
      await dispatch(getExercises(Number.parseInt(id || '0')))
    }
    fun()
  }, [dispatch, id])

  const routine = window.location.pathname.includes(PATH.main)
    ? values.published.find(
        (routine) => routine.id === Number.parseInt(id || '0'),
      )
    : values.ownRoutines.find(
        (routine) => routine.id === Number.parseInt(id || '0'),
      )

  useEffect(() => {
    if (isUndefined(id)) navigate(ROUTE_PATH.main)
    if (isUndefined(routine)) navigate(ROUTE_PATH.main)
  }, [id, navigate, routine])

  const onClick = () => {
    if (routine?.id && textRef.current) {
      dispatch(
        addCommentAction({
          routineId: routine?.id,
          content: textRef.current.value,
        }),
      )
    }
  }

  return (
    <section className="routines-container">
      <Card title={routine?.name || ''}>
        <ExercisesDataView routine={routine as Routine} />
      </Card>
      <Card title="main.routines.details.comments.title">
        <h2>
          {t('main.routines.details.comments.title')}:
          {routine?.comments?.length}
        </h2>
        <div className="flex flex-row items-center mb-6">
          <img
            src={`${BASE_URL}/${user.profilePictureName}`}
            className=" w-10 h-10 rounded-full mx-2"
          />
          <textarea
            ref={textRef}
            className="w-full rounded-md border-2 focus:border-2 focus:border-black-500  transition-all duration-300"
          />
          <Button
            onClick={onClick}
            className="button button--primary">
            <PaperPlaneIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-4 my-6 py-3 overflow-scroll max-h-64">
          {routine?.comments ? (
            routine?.comments.map((comment) => (
              <div
                className="flex flex-row items-center gap-2"
                key={
                  comment.user_id +
                  comment.user_name +
                  comment.content.substring(0, 3)
                }>
                <img
                  src={`${BASE_URL}/${comment.user_id}.jpg`}
                  className=" w-10 h-10 rounded-full mx-2 self-start my-1"
                />
                <div className="flex flex-col gap-1 w-11/12 justify-center">
                  <p className="">{comment.user_name}</p>
                  <p className="bg-white rounded-md px-2 py-4">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </Card>
    </section>
  )
}
