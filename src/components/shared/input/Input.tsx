import { useTranslation } from 'react-i18next'
import { ErrorMessage, Field } from 'formik'

import { FieldTag, InputProps, InputType } from './types'

import './input.scss'

export const Input = ({
  id,
  field,
  placeHolder,
  className,
  inputType,
  fieldTag,
  options,
}: InputProps) => {
  const { t } = useTranslation()
  return (
    <div
      className={`${className} input`}
      role={`input-${id}`}>
      <label
        role="input__title"
        className={`${className} input__title`}
        htmlFor={id}>
        {t(field) + ''}
        {inputType === InputType.Range ? (
          <output
            id={`${id}-output`}
            name={id}
            htmlFor={id}
          />
        ) : (
          ''
        )}
      </label>
      <Field
        type={inputType}
        role="input"
        className={`${className} input__data-enter`}
        id={id}
        name={id}
        placeholder={t(placeHolder)}
        as={fieldTag}>
        {options &&
          fieldTag === FieldTag.Select &&
          options.map((option, key) => (
            <option
              key={key}
              value={option.value}>
              {option.label}
            </option>
          ))}
      </Field>

      <ErrorMessage name={id}>
        {(msg) => (
          <div
            className={`${className} input__error-message`}
            role="error">
            {t(msg)}
          </div>
        )}
      </ErrorMessage>
    </div>
  )
}
