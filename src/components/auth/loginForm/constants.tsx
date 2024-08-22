import * as Yup from 'yup'

import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'

export const LOGIN_FORM_INPUTS: InputProps[] = [
  {
    id: 'name',
    field: 'auth.form.name.label',
    placeHolder: 'auth.form.name.placeholder',
    className: 'name',
    inputType: InputType.Text,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'password',
    field: 'auth.form.password.label',
    placeHolder: 'auth.form.password.placeholder',
    className: 'name',
    inputType: InputType.Password,
    fieldTag: FieldTag.Input,
  },
]

export const VALID_LOGIN_SCHEMA = Yup.object().shape({
  name: Yup.string().min(2, 'error').required('form.error_messages.required'),
  password: Yup.string()
    .min(2, 'error')
    .required('form.error_messages.required'),
})
