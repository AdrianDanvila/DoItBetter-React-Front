import { PropsWithChildren, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Column, ColumnEditorOptions } from 'primereact/column'
import { DataTable, DataTableValue } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'

import { BASE_TABLE_CONFIG } from './constants'
import { TableProps } from './types'

import './table.scss'

export const Table = <T extends { id?: number }>({
  values,
  selectedItem,
  columns,
  className = 'table',
  headerClassName = 'table__header',
  cellClassname = 'table__cell',
  children,
  onRowEditComplete,
  onRowDobleClick,
  onSelectionChange,
}: PropsWithChildren<TableProps<T>>) => {
  const { t } = useTranslation()

  const textEditor = (options: ColumnEditorOptions) => (
    <InputText
      className="border-2	border-gray-300 rounded-md w-full"
      type="text"
      value={options.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        options.editorCallback!(e.target.value)
      }
    />
  )

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <DataTable
        {...BASE_TABLE_CONFIG}
        selection={selectedItem}
        //rowsPerPageOptions={[5, 10, 25, 50]}
        onRowDoubleClick={onRowDobleClick}
        onSelectionChange={(e) => onSelectionChange?.(e.value as T)}
        onRowEditComplete={(e) => onRowEditComplete?.(e.index, e.newData as T)}
        className={className}
        value={values as DataTableValue[]}>
        {onSelectionChange && (
          <Column
            headerClassName={headerClassName}
            selectionMode="single"
            className="table__selectCell"
          />
        )}

        {columns.map((column) => (
          <Column
            {...column}
            key={column.field}
            header={t(column.header)}
            headerClassName={headerClassName}
            className={cellClassname}
            editor={textEditor}
          />
        ))}
        {children}
        {onRowEditComplete && (
          <Column
            headerStyle={{ width: '10%' }}
            rowEditor={true}
            header="edit"
            headerClassName={headerClassName}
            className={cellClassname}
            editor={(options) => textEditor(options)}
          />
        )}
      </DataTable>
    </Suspense>
  )
}
