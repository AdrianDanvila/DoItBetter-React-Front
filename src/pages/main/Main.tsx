import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from '@/components/shared/card/Card'
import { RoutinesDataview } from '@/components/shared/routinesDataView/RoutineDataView'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { getPublishedRoutines } from '@/store/routinesSlice'

export const Main = () => {
  const dispatch = useAppDispatch()
  const values = useAppSelector((state) => state.routines)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getPublishedRoutines())
  }, [dispatch])

  const publisherRoutinesCount = values.ownRoutines.filter(
    (value) => value.published,
  ).length

  return (
    <section className="routines-container">
      <div className="flex flex-col xl:flex-row justify-between gap-3">
        <Card
          title="main.main_page.number_routines.title"
          className="w-full">
          <p className="text-2xl font-verbatim gap-1 flex items-end">
            <b className="text-4xl text-blue-700">
              {values.ownRoutines.length}
            </b>
            {values.ownRoutines.length === 1
              ? t('main.main_page.number_routines.content')
              : t('main.main_page.number_routines.content_plural')}
          </p>
        </Card>

        <Card
          title="main.main_page.number_published_routines.title"
          className="w-full">
          <p className="text-2xl font-verbatim gap-1 flex items-end">
            <b className="text-4xl text-blue-700"> {publisherRoutinesCount}</b>
            {publisherRoutinesCount === 1
              ? t('main.main_page.number_published_routines.content')
              : t('main.main_page.number_published_routines.content_plural')}
          </p>
        </Card>

        <Card
          title="main.main_page.number_routines.title"
          className="w-full">
          <p className="text-2xl font-verbatim gap-1 flex items-end">
            <b className="text-4xl text-blue-700">
              {values.ownRoutines.length}
            </b>
            {values.ownRoutines.length === 1
              ? t('main.main_page.number_routines.content')
              : t('main.main_page.number_routines.content_plural')}
          </p>
        </Card>
      </div>

      <Card title="main.routines.table.title">
        <RoutinesDataview
          className="h-[48vh] "
          values={values.published}
        />
      </Card>
    </section>
  )
}
