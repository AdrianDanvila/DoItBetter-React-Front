import {
  FieldTag,
  InputProps,
  InputType,
} from '@/components/shared/input/types'

export const EXECISE_EDIT_FORM_INPUTS: InputProps[] = [
  {
    id: 'reps',
    field: 'main.routines.details.form.inputs.reps.label',
    placeHolder: 'main.routines.details.form.inputs.reps.label',
    className: 'w-full',
    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
    min: 1,
    max: 200,
  },
  {
    id: 'sets',
    field: 'main.routines.details.form.inputs.sets.label',
    placeHolder: 'main.routines.details.form.inputs.sets.label',
    className: 'w-full',
    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
    min: 1,
    max: 200,
  },
  {
    id: 'weight',
    field: 'main.routines.details.form.inputs.weight.label',
    placeHolder: 'main.routines.details.form.inputs.weight.label',
    className: 'w-full',
    inputType: InputType.Number,
    fieldTag: FieldTag.Input,
    min: 1,
    max: 200,
  },
]
