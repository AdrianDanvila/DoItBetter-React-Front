export enum InputType {
  Mail = 'mail',
  Select = 'select',
  Text = 'text',
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
  options?: Record<string, string>[]
}
