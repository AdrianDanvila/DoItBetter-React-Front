import { ColumnData } from '@/components/shared/table/types'

export const ROTUINES_TABLE_DATA: ColumnData[] = [
  {
    sortable: true,
    header: 'main.routines.table.headers.name',
    field: 'code',
  },

  {
    sortable: true,
    header: 'main.routines.table.headers.description',
    field: 'letter',
  },

  {
    sortable: true,
    header: 'main.routines.table.headers.date_created',
    field: 'letter',
  },
]
