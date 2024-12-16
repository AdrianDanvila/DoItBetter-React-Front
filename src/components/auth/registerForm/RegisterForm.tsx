import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Form } from '@components/shared/form/Form'

import {
  INITIAL_VALUES,
  REGISTER_FORM_INPUTS,
  VALID_REGISTER_SCHEMA,
} from './constants'

import './register-form.scss'

import { registerUser } from '@/api/services'
import { Card } from '@/components/shared/card/Card'
import { useToast } from '@/components/shared/toast/useToast'
import { ROUTE_PATH } from '@/router/constants'
import { User } from '@/types/interfaces'

export const RegisterForm = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { showToast } = useToast()
  const [isDisabled, setIsDisabled] = useState(false)

  const sumbitHandler = async (user: User) => {
    setIsDisabled(true)
    const responseStatus = await registerUser(user).then((data) => data.status)
    switch (responseStatus) {
      case 202:
        setTimeout(() => {
          showToast('success', 'auth.register.toast.succesful', '')
          setTimeout(() => navigate(ROUTE_PATH.main), 1000)
        }, 1000)
        break

      case 401:
        setTimeout(() => {
          showToast('error', 'auth.register.toast.bad_credential', '')
          setIsDisabled(false)
        }, 1000)

        break

      default:
        setTimeout(() => {
          showToast('error', 'auth.login.toast.bad_credential', '')
          setIsDisabled(false)
        }, 1000)
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
          disabled={isDisabled}
        />
      </Card>
      <p className="my-6">
        <Trans
          t={t}
          i18nKey="auth.register.register_link"
          components={{
            a: <a className="underline text-blue-600" />,
          }}
        />
      </p>
    </>
  )
}
