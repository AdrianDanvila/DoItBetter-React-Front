import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Form } from '@components/shared/form/Form'

import { LOGIN_FORM_INPUTS, VALID_LOGIN_SCHEMA } from './constants'

import './login-form.scss'

import { Card } from '@/components/shared/card/Card'
import { useToast } from '@/components/shared/toast/useToast'
import { useAppDispatch } from '@/helpers/hooks'
import { ROUTE_PATH } from '@/router/constants'
import { loginUser } from '@/store/userSlice'
import { User } from '@/types/interfaces'

export const LoginForm = () => {
  const { showToast } = useToast()
  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const sumbitHandler = async (user: User) => {
    setIsDisabled(true)

    const resultAction = await dispatch(loginUser(user))

    switch (resultAction.payload.status) {
      case 202:
        setTimeout(() => {
          showToast('success', 'auth.login.toast.succesful', '')
          setTimeout(() => navigate(ROUTE_PATH.main), 1000)
        }, 500)
        break

      case 401:
        setTimeout(() => {
          showToast('error', 'auth.login.toast.bad_credential', '')
          setIsDisabled(false)
        }, 500)

        break

      default:
        setTimeout(() => {
          showToast('error', 'auth.login.toast.bad_credential', '')
          setIsDisabled(false)
        }, 500)
        break
    }
  }

  return (
    <>
      <Card
        title="auth.login.title"
        className="w-full">
        <Form<User>
          className="login-form"
          inputs={LOGIN_FORM_INPUTS}
          initialValues={{ email: '', password: '' }}
          validationSchema={VALID_LOGIN_SCHEMA}
          onSumbit={sumbitHandler}
          disabled={isDisabled}
        />
      </Card>
      <p className="my-6">
        <Trans
          t={t}
          i18nKey="auth.login.register_link"
          components={{
            a: <a className="underline text-blue-600" />,
          }}
        />
      </p>
    </>
  )
}
