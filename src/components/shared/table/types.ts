export interface TableProps {
  values: unknown[]
  columns: ColumnData[]
  className?: string
  headerClassName?: string
  cellClassname?: string
}

export interface ColumnData {
  sortable: boolean
  header: string
  field: string
}
