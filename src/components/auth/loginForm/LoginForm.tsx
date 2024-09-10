import { Trans } from 'react-i18next'

import { Form } from '@components/shared/form/Form'

import { LOGIN_FORM_INPUTS, VALID_LOGIN_SCHEMA } from './constants'

import './login-form.scss'

import { Card } from '@/components/shared/card/Card'

export const LoginForm = () => (
  <>
    <Card title="auth.login.title">
      <Form
        className="login-form"
        inputs={LOGIN_FORM_INPUTS}
        initialValues={{ name: '', password: '' }}
        validationSchema={VALID_LOGIN_SCHEMA}
        onSumbit={function (): void {
          throw new Error('Function not implemented.')
        }}
        disabled={false}
      />
    </Card>
    <p className="my-6">
      <Trans
        i18nKey="auth.login.register_link"
        components={{
          a: <a className="underline text-blue-600" />,
        }}
      />
    </p>
  </>
)
