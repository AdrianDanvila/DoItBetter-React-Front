import {
  EXECISE_FORM_INPUTS,
  INITIAL_VALUES,
  VALID_EXERCISE_SCHEMA,
} from './constants'
import { ExerciseFormProps } from './types'

import { Form } from '@/components/shared/form/Form'

export const ExerciseForm = ({ onSumbit }: ExerciseFormProps) => (
  <Form
    inputs={EXECISE_FORM_INPUTS}
    initialValues={INITIAL_VALUES}
    validationSchema={VALID_EXERCISE_SCHEMA}
    onSumbit={(e) => {
      onSumbit?.(e)
    }}
    disabled={false}
  />
)
