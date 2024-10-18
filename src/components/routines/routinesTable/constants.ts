import { ColumnData } from '@/components/shared/table/types'
import { Routine } from '@/types/interfaces'

export const ROTUINES_TABLE_DATA: ColumnData[] = [
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
]

export const routines: Routine[] = [
  {
    id: 1,
    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    description: 'c',
    user_id: 0,
    user_name: null,
  },
  {
    id: 2,
    name: 'b',
    description: 'c',
    user_id: 0,
    user_name: null,
  },
  {
    id: 3,
    name: 'c',
    description: 'c',
    user_id: 0,
    user_name: null,
  },
  {
    id: 4,
    name: 'd',
    description: 'c',
    user_id: 0,
    user_name: null,
  },
  {
    id: 5,
    name: 'e',
    description: 'c',
    user_id: 0,
    user_name: null,
  },
  {
    id: 6,
    name: 'g',
    description: 'c',
    user_id: 0,
    user_name: null,
  },
]
