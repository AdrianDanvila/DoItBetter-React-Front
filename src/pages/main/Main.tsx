import { useEffect, useState } from 'react'

import { getAllPublishedRoutines } from '@/api/services'
import { ROTUINES_TABLE_DATA } from '@/components/routines/routinesTable/constants'
import { Card } from '@/components/shared/card/Card'
import { Table } from '@/components/shared/table/Table'
import { useTable } from '@/components/shared/table/useTable'
import { Routine } from '@/types/interfaces'

export const Main = () => {
  const [values, setValues] = useState<Routine[]>()
  const {
    selectedItem,
    setSelectedItem,
    onSelectionChange,
    setError,
    succesHandler,
  } = useTable<Routine>()

  useEffect(() => {
    const callGetAllPublishedRoutines = async () => {
      const routines = await getAllPublishedRoutines()
      setValues(routines.data)
    }
    callGetAllPublishedRoutines()
  }, [])
  return (
    <section className="routines-container">
      <Card title="main.routines.table.title">
        <Table<Routine>
          values={values || []}
          columns={ROTUINES_TABLE_DATA}
          selectedItem={selectedItem as Routine}
        />
      </Card>

      <Card title="main.routines.table.title">
        <Table<Routine>
          values={values || []}
          columns={ROTUINES_TABLE_DATA}
          selectedItem={selectedItem as Routine}
        />
      </Card>
    </section>
  )
}
