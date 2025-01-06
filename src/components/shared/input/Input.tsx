/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { ErrorMessage, Field, FormikValues, useFormikContext } from 'formik'

import { FieldTag, InputProps, InputType } from './types'

import './input.scss'

export const Input = <T extends FormikValues>({
  id,
  field,
  placeHolder,
  className,
  inputType,
  fieldTag,
  options,
  disabled,
  min,
  max,
}: InputProps) => {
  const { t } = useTranslation()
  const formikProps = useFormikContext()
  const [value, setValue] = useState((formikProps.values as T)[id as keyof T])

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
        <Trans
          t={t}
          i18nKey={field}
          values={{ value: value ?? 0 }}
        />
      </label>

      <Field
        min={inputType === InputType.Range ? min || 0 : 0} // Mínimo permitido
        max={inputType === InputType.Range ? max || 100 : 100} // Mínimo permitido
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
