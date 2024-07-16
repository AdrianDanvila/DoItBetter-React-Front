import { Form } from '@components/shared/form/Form'

import { LOGIN_FORM_INPUTS, VALID_LOGIN_SCHEMA } from './constants'

import './login-form.scss'

export const LoginForm = () => (
  <Form
    className="login-form"
    inputs={LOGIN_FORM_INPUTS}
    initialValues={{ a: '' }}
    validationSchema={VALID_LOGIN_SCHEMA}
    onSumbit={function (): void {
      throw new Error('Function not implemented.')
    }}
  />
)
