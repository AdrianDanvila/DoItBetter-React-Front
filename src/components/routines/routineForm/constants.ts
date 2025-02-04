import * as Yup from 'yup'

import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'
import { Routine } from '@/types/interfaces'

export const ROUTINE_FORM_INPUTS: InputProps[] = [
  {
    id: 'name',
    field: 'main.routines.form.name.label',
    placeHolder: 'main.routines.form.name.label',
    className: '',
    inputType: InputType.Text,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'description',
    field: 'main.routines.form.description.label',
    placeHolder: 'main.routines.form.description.label',
    className: '',
    inputType: InputType.Text,
    fieldTag: FieldTag.Input,
  },
]

export const VALID_ROUTINE_SCHEMA = Yup.object().shape({
  name: Yup.string().min(2, 'error').required('form.error_messages.required'),
  description: Yup.string()
    .min(2, 'error')
    .required('form.error_messages.required'),
})

export const INITIAL_VALUES: Routine = {
  name: '',
  description: '',
  id: 0,
  user_id: 0,
  user_name: null,
}
