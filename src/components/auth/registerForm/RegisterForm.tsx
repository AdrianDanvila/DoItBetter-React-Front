import { Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { HttpStatusCode } from 'axios'

import { Form } from '@components/shared/form/Form'

import {
  INITIAL_VALUES,
  REGISTER_FORM_INPUTS,
  VALID_REGISTER_SCHEMA,
} from './constants'

import './register-form.scss'

import { registerUser } from '@/api/services'
import { Card } from '@/components/shared/card/Card'
import { ROUTE_PATH } from '@/router/constants'
import { User } from '@/types/interfaces'

export const RegisterForm = () => {
  const navigate = useNavigate()
  const sumbitHandler = async (user: User) => {
    const responseStatus = await registerUser(user).then((data) => data.status)
    switch (responseStatus) {
      case HttpStatusCode.Accepted:
        break

      case HttpStatusCode.Forbidden:
        break

      case HttpStatusCode.InternalServerError:
        break

      default:
        break
    }
    navigate(ROUTE_PATH.login)
  }
  return (
    <>
      <Card
        title="auth.register.title"
        className="w-full">
        <Form<User>
          className="register-form"
          inputs={REGISTER_FORM_INPUTS}
          initialValues={INITIAL_VALUES}
          validationSchema={VALID_REGISTER_SCHEMA}
          onSumbit={sumbitHandler}
          disabled={false}
        />
      </Card>
      <p className="my-6">
        <Trans
          i18nKey="auth.register.register_link"
          components={{
            a: <a className="underline text-blue-600" />,
          }}
        />
      </p>
    </>
  )
}
