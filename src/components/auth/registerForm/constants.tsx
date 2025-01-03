import * as Yup from 'yup'

import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'
import { User } from '@/types/interfaces'

export const REGISTER_FORM_INPUTS: InputProps[] = [
  {
    id: 'name',
    field: 'auth.form.name.label',
    placeHolder: 'auth.form.name.placeholder',
    className: '',
    inputType: InputType.Text,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'age',
    field: 'auth.form.age.label',
    placeHolder: 'auth.form.age.placeholder',
    className: '',
    inputType: InputType.Text,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'weight',
    field: 'auth.form.weight.label',
    placeHolder: 'auth.form.weight.placeholder',
    className: '',
    inputType: InputType.Range,
    fieldTag: FieldTag.Input,
    min: 0,
    max: 250,
  },
  {
    id: 'height',
    field: 'auth.form.height.label',
    placeHolder: 'auth.form.height.placeholder',
    className: '',
    inputType: InputType.Range,
    fieldTag: FieldTag.Input,
    min: 0,
    max: 200,
  },
  {
    id: 'email',
    field: 'auth.form.mail.label',
    placeHolder: 'auth.form.mail.placeholder',
    className: '',
    inputType: InputType.Mail,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'password',
    field: 'auth.form.password.label',
    placeHolder: 'auth.form.password.placeholder',
    className: '',
    inputType: InputType.Password,
    fieldTag: FieldTag.Input,
  },
]

export const VALID_REGISTER_SCHEMA = Yup.object().shape({
  name: Yup.string().min(2, 'error').required('form.error_messages.required'),
  email: Yup.string()
    .email('auth.form.mail.error_messages.format')
    .required('form.error_messages.required'),
  password: Yup.string()
    .min(12, 'auth.form.password.error_messages.minimun')
    .required('form.error_messages.required'),
  age: Yup.number()
    .min(18, 'auth.form.age.error_messages.minimun')
    .required('form.error_messages.required'),
  height: Yup.number().required('form.error_messages.required'),
  weight: Yup.number().required('form.error_messages.required'),
})

export const INITIAL_VALUES: User = {
  name: '',
  age: 0,
  email: '',
  password: '',
  weight: 0,
  height: 0,
}
