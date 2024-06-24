import { Provider } from 'react-redux'
import { expect, vitest } from 'vitest'

import { index } from '@store'

import { useAppDispatch, useAppSelector } from '@helpers/hooks.ts'

import { TablePagination } from '../TablePagination.tsx'

import { createAction } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'

const action = createAction<number>('test/test')

describe('TablePagination', () => {
  const reactRedux = { useAppDispatch, useAppSelector }
  const useDispatchMock = vitest.spyOn(reactRedux, 'useAppDispatch')
  const mockDispatch = vitest.fn()
  useDispatchMock.mockReturnValue(mockDispatch)
  index.dispatch = mockDispatch
  it('Pagination should dispatch actions onClick ', () => {
    render(
      <Provider store={index}>
        <TablePagination
          action={action}
          maxPages={10}
        />
      </Provider>,
    )
    fireEvent.click(screen.getAllByRole('button')[5])
    expect(index.dispatch).toHaveBeenCalledWith({
      payload: 0,
      type: 'test/test',
    })

    expect(index.dispatch).toHaveBeenCalledWith({
      payload: 4,
      type: 'test/test',
    })
  })
})
