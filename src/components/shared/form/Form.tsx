import { useTranslation } from 'react-i18next'
import { Form as FormikForm, Formik, FormikValues } from 'formik'

import { Button } from '../button/Button'
import { ButtonSeverity, ButtonType } from '../button/types'
import { Input } from '../input/Input'

import { FormProps } from './types'

import './form.scss'

/**
 *
 *
 * @template T
 * @param {FormProps<T>} {
 *   initialValues,
 *   inputClassName,
 *   inputs,
 *   className = 'form',
 *   validationSchema,
 *   onSumbit,
 * }
 * @return {*}
 */
export const Form = <T extends FormikValues>({
  initialValues,
  inputClassName,
  inputContainerClassName,
  inputs,
  className = 'form',
  validationSchema,
  onSumbit,
  disabled,
}: FormProps<T>) => {
  const { t } = useTranslation()
  return (
    <Formik
      enableReinitialize={true}
      isInitialValid
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(e) => onSumbit(e)}>
      <FormikForm className={`${className} form`}>
        <div className={`${inputContainerClassName} form__inputs-container`}>
          {inputs?.map((input) => (
            <Input
              disabled={disabled}
              key={input.id}
              {...input}
              className={`${input.className || inputClassName}  input`}
            />
          ))}
        </div>
        {disabled || (
          <div className={`${className} form__actions-container`}>
            <Button
              type={ButtonType.Submit}
              icon={undefined}
              severity={ButtonSeverity.Primary}>
              {t('form.submit') || t('form.reset')}
            </Button>
          </div>
        )}
      </FormikForm>
    </Formik>
  )
}
