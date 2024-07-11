import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Column } from 'primereact/column'
import { DataTable, DataTableValue } from 'primereact/datatable'

import { TableProps } from './types'

import './table.scss'

export const Table = ({
  values,
  columns,
  className,
  headerClassName,
  cellClassname,
}: TableProps) => {
  const { t } = useTranslation()

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <DataTable
        removableSort
        scrollable={true}
        className={className}
        value={values as DataTableValue[]}>
        {columns.map((column) => (
          <Column
            key={column.field}
            sortable
            field={column.field}
            header={t(column.header)}
            headerClassName={headerClassName}
            className={cellClassname ? cellClassname : 'pl-2'}
          />
        ))}
      </DataTable>
    </Suspense>
  )
}
