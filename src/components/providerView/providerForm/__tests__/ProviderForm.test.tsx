import { Provider } from 'react-redux'
import { Formik, FormikHelpers } from 'formik'
import { expect } from 'vitest'

import { index } from '@store'

import {
  DEFAULT_FORM_VALUES,
  VALID_PROVIDER_SCHEMA,
} from '@pages/providerView/constants.ts'

import { providersFormText } from '@locales/es.json'

import { Provider as Supplier } from '@customTypes/interfaces.ts'

import { FORM_CONFIG_BUSINESS, FORM_CONFIG_CONTACT } from '../constants.ts'
import { ProviderForm } from '../ProviderForm.tsx'

import {
  fireEvent,
  getByRole,
  render,
  screen,
  waitFor,
} from '@testing-library/react'

describe('ProviderForm', () => {
  const form = (
    <Provider store={index}>
      <Formik
        initialValues={DEFAULT_FORM_VALUES}
        validationSchema={VALID_PROVIDER_SCHEMA}
        onSubmit={async (
          _values: Supplier,
          { setSubmitting }: FormikHelpers<Supplier>,
        ) => setSubmitting(false)}>
        <ProviderForm />
      </Formik>
    </Provider>
  )

  it('ProviderForm should render with provider labels', () => {
    render(form)
    expect(screen.getAllByRole('input').length).toBe(
      FORM_CONFIG_BUSINESS.length + FORM_CONFIG_CONTACT.length,
    )
  })

  it('on submit and all inputs void all messages should have error message', async () => {
    render(form)

    fireEvent.click(screen.getByRole('save-button'))
    await waitFor(() => {
      const error_message = screen.getAllByRole('error')
      error_message.map(() =>
        expect(error_message[0].className).toMatch('input__error-message'),
      )
    })
  })

  it('should be mail type and be void ', async () => {
    render(form)

    const input = screen.getByPlaceholderText(
      providersFormText.email.placeHolder,
    )
    fireEvent.blur(input)
    fireEvent.focus(input)
    fireEvent.focusOut(input)

    await waitFor(() =>
      expect(
        getByRole(screen.getByRole('input-email'), 'error').textContent,
      ).toBe(providersFormText.required),
    )
  })

  it('should be mail type and be incorrect', async () => {
    render(form)
    const input = screen.getByPlaceholderText(
      providersFormText.email.placeHolder,
    )
    fireEvent.blur(input)
    fireEvent.focus(input)
    fireEvent.change(input, {
      target: { value: 123 },
    })
    fireEvent.focusOut(input)
    await waitFor(() =>
      expect(
        getByRole(screen.getByRole('input-email'), 'error').textContent,
      ).toBe(
        providersFormText.email.errorMessage +
          providersFormText.email.placeHolder,
      ),
    )
  })
})
