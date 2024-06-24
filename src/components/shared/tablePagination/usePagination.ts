import { useEffect } from 'react'

import { useAppDispatch } from '@helpers/hooks.ts'

import { Action } from './types.ts'

export function usePagination(
  numPage: number,
  action: Action,
  isActive?: boolean,
  searchTerm?: string,
  isPriced?: boolean,
) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const asyncDispatch = async () =>
      await dispatch(action({ numPage, isActive, searchTerm, isPriced }))

    asyncDispatch()
      .catch
      //TODO Create a modal that show all errors
      ()
  }, [action, dispatch, numPage, isActive, searchTerm, isPriced])
}
