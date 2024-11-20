import * as Yup from 'yup'

import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'
import { Exercise } from '@/types/interfaces'

export const EXECISE_FORM_INPUTS: InputProps[] = [
  {
    id: 'id',
    field: 'main.routines.details.form.inputs.name.label',
    placeHolder: 'main.routines.details.form.inputs.name.placeholder',
    className: 'w-full',
    options: [
      { value: 1, label: 'exercises.squat.name' },
      { value: 2, label: 'exercises.biceps_curl.name' },
      { value: 3, label: 'exercises.benchpress.name' },
    ],
    inputType: InputType.Text,
    fieldTag: FieldTag.Select,
  },
  {
    id: 'reps',
    field: 'main.routines.details.form.inputs.reps.label',
    placeHolder: 'main.routines.details.form.inputs.reps.label',
    className: 'w-1/3',
    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'sets',
    field: 'main.routines.details.form.inputs.sets.label',
    placeHolder: 'main.routines.details.form.inputs.sets.label',
    className: 'w-1/3',
    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'weight',
    field: 'main.routines.details.form.inputs.weight.label',
    placeHolder: 'main.routines.details.form.inputs.weight.label',
    className: 'w-1/4',
    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
  },
]

export const VALID_EXERCISE_SCHEMA = Yup.object().shape({
  sets: Yup.string()
    .min(1, 'min required')
    .required('form.error_messages.required'),
  reps: Yup.string()
    .min(1, 'min required')
    .required('form.error_messages.required'),
})

export const INITIAL_VALUES: Exercise = {
  name: '',
  description: '',
  exercise: {
    id: 1,
    name: '',
    photo: '',
    description: '',
  },
  sets: 0,
  weight: 0,
  reps: 0,
  id: 1,
}
