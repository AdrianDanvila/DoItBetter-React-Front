import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'
import { FileTextIcon } from '@radix-ui/react-icons'

import { PUBLISHED_ROTUINES_TABLE_DATA } from './constants'

import { ROTUINES_TABLE_DATA } from '@/components/routines/routinesTable/constants'
import { Button } from '@/components/shared/button/Button'
import { ButtonSeverity } from '@/components/shared/button/types'
import { Card } from '@/components/shared/card/Card'
import { Table } from '@/components/shared/table/Table'
import { useTable } from '@/components/shared/table/useTable'
import { useAppDispatch, useAppSelector } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { getPublishedRoutines } from '@/store/routinesSlice'
import { Routine } from '@/types/interfaces'

export const Main = () => {
  const { selectedItem, onSelectionChange } = useTable<Routine>()
  const dispatch = useAppDispatch()
  const values = useAppSelector((state) => state.routines)
  const navigate = useNavigate()

  const showDetailsButtonClickHandler = () =>
    selectedItem && navigate(`${ROUTE_PATH.main}/${selectedItem?.id}`)

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
          title="numero de rutinas creadas"
          className="w-full">
          <p className="text-2xl font-verbatim gap-1 flex items-end">
            <b className="text-4xl text-blue-700">
              {' '}
              {values.ownRoutines.length}
            </b>
            rutina{values.ownRoutines.length == 1 ? '' : 's'} creada
            {values.ownRoutines.length == 1 ? '' : 's'}
          </p>
        </Card>

        <Card
          title="numero de rutinas publicadas"
          className="w-full">
          <p className="text-2xl font-verbatim gap-1 flex items-end">
            <b className="text-4xl text-blue-700"> {publisherRoutinesCount}</b>
            rutina{publisherRoutinesCount == 1 ? '' : 's'} publicada
            {publisherRoutinesCount == 1 ? '' : 's'}
          </p>
        </Card>

        <Card
          title="numero de rutinas creadas"
          className="w-full">
          <p className="text-2xl font-verbatim gap-1 flex items-end">
            <b className="text-4xl text-blue-700">
              {' '}
              {values.ownRoutines.length}
            </b>
            rutina{values.ownRoutines.length == 1 ? '' : 's'} creada
            {values.ownRoutines.length == 1 ? '' : 's'}
          </p>
        </Card>
      </div>

      <Card title="main.routines.table.title">
        <Toolbar
          className="p-0 m-0"
          end={
            <>
              <Button
                onClick={showDetailsButtonClickHandler}
                icon={<FileTextIcon className="icon" />}
                severity={ButtonSeverity.Primary}
              />
            </>
          }
        />
        <Table<Routine>
          values={values.published || []}
          columns={PUBLISHED_ROTUINES_TABLE_DATA}
          selectedItem={selectedItem as Routine}
          onSelectionChange={onSelectionChange}
        />
      </Card>

      <Card title="main.routines.table.title">
        <Table<Routine>
          values={values.published || []}
          columns={ROTUINES_TABLE_DATA}
          selectedItem={selectedItem as Routine}
          onSelectionChange={onSelectionChange}
        />
      </Card>
    </section>
  )
}
