import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'

import providers from '@api/__mocks__/providers.json'

import { index } from '@store'

import { providersAction } from '@locales/es.json'

import { ActionModal } from '../ActionModal.tsx'

import { fireEvent, render, screen } from '@testing-library/react'

describe('ActionModalTest', () => {
  it('should appear when click trigger button', () => {
    const provider = providers.actives[0][0]
    provider.active = true
    render(
      <Provider store={index}>
        <ActionModal provider={provider} />
      </Provider>,
    )
    fireEvent.click(
      screen.getByRole('button', { name: providersAction.triggerButtonLabel }),
    )
    expect(
      screen.getByRole('button', { name: providersAction.actionButtonLabel }),
    )
  })

  it('should have the required text depending if is active or not', () => {
    const provider = providers.actives[0][0]
    const alertTitle = provider.active
      ? providersAction.deregister
      : providersAction.register
    provider.active = true
    render(
      <Provider store={index}>
        <ActionModal provider={provider} />
      </Provider>,
    )
    fireEvent.click(
      screen.getByRole('button', { name: providersAction.triggerButtonLabel }),
    )
    expect(
      screen.getByRole('button', { name: providersAction.actionButtonLabel })
        .textContent,
    ).toMatch(alertTitle.toString())
  })
})
