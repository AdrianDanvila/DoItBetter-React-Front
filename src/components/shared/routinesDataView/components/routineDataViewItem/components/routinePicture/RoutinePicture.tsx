/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'

import { BASE_URL } from '@/constants/server'
import { useAppDispatch } from '@/helpers/hooks'
import { uploadRoutineImageAction } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

export interface RoutinePictureProps {
  routine: Routine
  user_id: number
}

export const RoutinePicture = ({ routine, user_id }: RoutinePictureProps) => {
  const inputRef = useRef<any>(null)
  const dispatch = useAppDispatch()

  return routine.published && routine.user_id !== user_id ? (
    <img
      src={`${BASE_URL}/uploads/${routine.routinePictureName}`}
      className="w-2/12 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round transition-all"
    />
  ) : (
    <>
      <img
        onClick={() => {
          inputRef.current && inputRef.current.click()
        }}
        src={`${BASE_URL}/uploads/${routine.routinePictureName}`}
        className="w-2/12 max-h-32 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round transition-all hover:scale-105 hover:cursor-pointer "
      />
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={async (e) => {
          if (e.target.files && e.target.files[0]) {
            const formData = new FormData()
            formData.append('file', e.target.files[0])
            dispatch(
              uploadRoutineImageAction({ file: formData, id: routine.id }),
            )
          }
        }}
        type="file"
        accept="image/png, image/gif, image/jpeg"
      />
    </>
  )
}
