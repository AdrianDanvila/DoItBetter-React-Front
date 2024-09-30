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
  const values = useAppSelector((state) => state.routines.ownRoutines)
  const navigate = useNavigate()

  const showDetailsButtonClickHandler = () =>
    selectedItem && navigate(`${ROUTE_PATH.main}/${selectedItem?.id}`)

  useEffect(() => {
    dispatch(getPublishedRoutines())
  }, [dispatch])
  console.log(values)

  return (
    <section className="routines-container">
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
          values={values || []}
          columns={PUBLISHED_ROTUINES_TABLE_DATA}
          selectedItem={selectedItem as Routine}
          onSelectionChange={onSelectionChange}
        />
      </Card>

      <Card title="main.routines.table.title">
        <Table<Routine>
          values={values || []}
          columns={ROTUINES_TABLE_DATA}
          selectedItem={selectedItem as Routine}
          onSelectionChange={onSelectionChange}
        />
      </Card>
    </section>
  )
}
