import { ColumnData } from '@/components/shared/table/types'

export const PUBLISHED_ROTUINES_TABLE_DATA: ColumnData[] = [
  {
    sortable: true,
    header: 'main.routines.table.headers.name',
    field: 'name',
  },

  {
    sortable: true,
    header: 'main.routines.table.headers.description',
    field: 'description',
  },

  {
    sortable: true,
    header: 'User name',
    field: 'user_name',
  },
]
