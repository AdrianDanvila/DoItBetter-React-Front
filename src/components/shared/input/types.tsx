export enum InputType {
  Mail = 'mail',
  Range = 'range',
  Select = 'select',
  Text = 'text',
  Number = 'number',
  Password = 'password',
}

export enum FieldTag {
  Input = 'input',
  Select = 'select',
  TextArea = 'textarea',
}

export interface InputProps {
  id: string
  field: string
  placeHolder: string
  className?: string
  inputType: InputType
  fieldTag: FieldTag
  options?: { value: number; label: string }[]
  disabled?: boolean
}
