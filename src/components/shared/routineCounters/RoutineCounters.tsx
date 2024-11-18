import { useTranslation } from 'react-i18next'

import { Card } from '../card/Card'

import { useAppSelector } from '@/helpers/hooks'
export interface RoutineCountersProps {
  className: string
}
export const RoutineCounters = ({ className }: RoutineCountersProps) => {
  const values = useAppSelector((state) => state.routines)
  const { t } = useTranslation()
  const publisherRoutinesCount = values.ownRoutines.filter(
    (value) => value.published,
  ).length
  return (
    <div className={`flex flex-col ${className}  gap-3`}>
      <Card
        title="main.main_page.number_routines.title"
        className="w-full">
        <p className="text-2xl font-verbatim gap-1 flex items-end">
          <b className="text-4xl text-blue-700">{values.ownRoutines.length}</b>
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
          <b className="text-4xl text-blue-700">{values.ownRoutines.length}</b>
          {values.ownRoutines.length === 1
            ? t('main.main_page.number_routines.content')
            : t('main.main_page.number_routines.content_plural')}
        </p>
      </Card>
    </div>
  )
}