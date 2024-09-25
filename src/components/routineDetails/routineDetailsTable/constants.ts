import { ColumnData } from '@/components/shared/table/types'

export const ROTUINE_DETAILS_TABLE_DATA: ColumnData[] = [
  {
    sortable: true,
    header: 'main.routines.table.headers.name',
    field: 'name',
  },

  {
    sortable: true,
    header: 'main.routines.table.headers.description',
    field: 'exercise.description',
  },

  {
    sortable: true,
    header: 'main.routines.table.headers.description',
    field: 'sets',
  },
  {
    sortable: true,
    header: 'main.routines.table.headers.description',
    field: 'reps',
  },
]
