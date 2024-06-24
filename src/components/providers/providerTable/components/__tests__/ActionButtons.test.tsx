import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { ProviderStatus } from '@customTypes/enums.ts'

import { ActionButtons } from '../ActionButtons.tsx'

import { render, screen } from '@testing-library/react'

describe('ActionButtonsComponent', () => {
  it('ActionButtons Render Active', () => {
    render(
      <MemoryRouter>
        <ActionButtons
          providerId={1}
          statusType={ProviderStatus.Active}></ActionButtons>
      </MemoryRouter>,
    )
    expect(screen.getAllByRole('button')[1].id).toBe('inactivate-button')
  })

  it('ActionButtons Render Inactive', () => {
    render(
      <MemoryRouter>
        <ActionButtons
          providerId={1}
          statusType={ProviderStatus.Inactive}></ActionButtons>
      </MemoryRouter>,
    )
    expect(screen.getAllByRole('button')[1].id).toBe('activate-button')
  })
})
