import * as Yup from 'yup'
import { AnyObject, Maybe } from 'yup'

import { InputProps } from '../input/types'

export interface FormProps<T extends Maybe<AnyObject>> {
  inputs: InputProps[]
  className?: string
  inputClassName?: string
  inputContainerClassName?: string
  initialValues: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema: Yup.ObjectSchema<any>
  onSumbit: (e: T) => void
  disabled: boolean
}
