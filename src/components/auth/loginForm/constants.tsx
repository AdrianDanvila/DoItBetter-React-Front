import * as Yup from 'yup'

import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'

export const LOGIN_FORM_INPUTS: InputProps[] = [
  {
    id: 'email',
    field: 'auth.form.mail.label',
    placeHolder: 'auth.form.mail.placeholder',
    className: 'email',
    inputType: InputType.Mail,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'password',
    field: 'auth.form.password.label',
    placeHolder: 'auth.form.password.placeholder',
    className: 'password',
    inputType: InputType.Password,
    fieldTag: FieldTag.Input,
  },
]

export const VALID_LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string().min(2, 'error').required('form.error_messages.required'),
  password: Yup.string()
    .min(2, 'error')
    .required('form.error_messages.required'),
})
