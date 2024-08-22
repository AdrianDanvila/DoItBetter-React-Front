export interface TableProps<T> {
  values: T[]
  selectedItem: T
  columns: ColumnData[]
  className?: string
  headerClassName?: string
  cellClassname?: string
  onRowEditComplete?: (index: number, newData: T) => void
  onRowDobleClick?: () => void
  onSelectionChange?: (selectedItem: T) => void
}

export interface ColumnData {
  sortable: boolean
  header: string
  field: string
}
