import { Provider } from 'react-redux'
import { Context as ResponsiveContext } from 'react-responsive'
import { MemoryRouter } from 'react-router-dom'
import { describe, it } from 'vitest'

import providers from '@api/__mocks__/providers.json'

import { index } from '@store'

import { ProviderStatus } from '@customTypes/enums.ts'

import { ProviderTable } from '../ProviderTable.tsx'

import { getAllByRole, render, screen } from '@testing-library/react'

describe('ProviderTableComponent', () => {
  it('ProviderTable should render 5 rows', () => {
    render(
      <Provider store={index}>
        <MemoryRouter>
          <ResponsiveContext.Provider value={{ width: 1000 }}>
            <ProviderTable
              providers={providers.actives[0]}
              maxPages={index.getState().providers.actives.numPages}
              statusType={ProviderStatus.Active}></ProviderTable>
          </ResponsiveContext.Provider>
        </MemoryRouter>
      </Provider>,
    )
    screen
      .getAllByRole('table-body')
      .map((element) =>
        expect(getAllByRole(element, 'table-row').length).toBe(5),
      )
  })
  it('ProviderTable should render 5 tables', () => {
    render(
      <Provider store={index}>
        <MemoryRouter>
          <ResponsiveContext.Provider value={{ width: 600 }}>
            <ProviderTable
              providers={providers.actives[0]}
              maxPages={index.getState().providers.actives.numPages}
              statusType={ProviderStatus.Active}></ProviderTable>
          </ResponsiveContext.Provider>
        </MemoryRouter>
        ,
      </Provider>,
    )
    expect(screen.getAllByRole('table').length).toBe(5)
  })
})
