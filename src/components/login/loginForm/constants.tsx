import * as Yup from 'yup'

import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'

export const LOGIN_FORM_INPUTS: InputProps[] = [
  {
    id: 'a',
    field: 'login.form.name.label',
    placeHolder: 'login.form.name.placeholder',
    className: 'constants',
    inputType: InputType.Mail,
    fieldTag: FieldTag.Input,
  },
]

export const VALID_LOGIN_SCHEMA = Yup.object().shape({
  a: Yup.string().min(2, 'error').required('requerido'),
})
