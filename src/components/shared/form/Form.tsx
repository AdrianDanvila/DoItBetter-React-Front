import { useTranslation } from 'react-i18next'
import { Form as FormikForm, Formik, FormikValues } from 'formik'
import { PaperPlaneIcon } from '@radix-ui/react-icons'

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
              options={input?.options}
              disabled={disabled}
              key={input.id}
              {...input}
              className={`${input.className || inputClassName}  input`}
            />
          ))}
        </div>
        {disabled || (
          <div className={`${className} form__actions-container pr-2`}>
            <Button
              type={ButtonType.Submit}
              className="text-sm bg-blue-500 hover:bg-blue-400 text-white w-fit"
              icon={undefined}
              severity={ButtonSeverity.Danger}>
              {t('form.submit') || t('form.reset')}
              <PaperPlaneIcon className="" />
            </Button>
          </div>
        )}
      </FormikForm>
    </Formik>
  )
}
