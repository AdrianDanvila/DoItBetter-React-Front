import * as Yup from 'yup'
import { AnyObject, Maybe } from 'yup'

import { InputProps } from '../input/types'

export interface FormProps<T extends Maybe<AnyObject>> {
  inputs: InputProps[]
  className?: string
  inputClassName?: string
  inputContainerClassName?: string
  initialValues: T
  validationSchema: Yup.ObjectSchema<T>
  onSumbit: (e: T) => void
  disabled: boolean
}
