import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'

export const EXECISE_EDIT_FORM_INPUTS: InputProps[] = [
  {
    id: 'reps',
    field: 'reps',
    placeHolder: 'auth.form.name.placeholder',
    className: 'w-1/3',

    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'sets',
    field: 'sets',
    placeHolder: 'auth.form.name.placeholder',
    className: 'w-1/3',
    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
  },
  {
    id: 'weight',
    field: 'weight',
    placeHolder: 'auth.form.name.placeholder',
    className: 'w-1/3',

    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
  },
]
