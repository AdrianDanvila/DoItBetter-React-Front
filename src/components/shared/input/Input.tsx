/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorMessage, Field, useFormikContext } from 'formik'

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
  disabled,
}: InputProps) => {
  const [value, setValue] = useState()
  const { t } = useTranslation()
  const formikProps = useFormikContext()

  const handleChange = async (event: {
    target: { value: SetStateAction<any> }
  }) => {
    setValue(event.target.value)
    formikProps.setFieldValue(id, event.target.value)
  }
  return (
    <div
      className={`${className} input`}
      role={`input-${id}`}>
      <label
        role="input__title"
        className={`${className} input__title`}
        htmlFor={id}>
        {t(field) + ''}
        {inputType === InputType.Range ? `${value || 0}` : ''}
      </label>
      <Field
        onChange={handleChange}
        disabled={disabled}
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
              {t(option.label)}
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
