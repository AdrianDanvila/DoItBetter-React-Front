import { useTranslation } from 'react-i18next'
import { Form as FormikForm, Formik } from 'formik'
import * as Yup from 'yup'

import { Button } from '../button/Button'
import { ButtonType } from '../button/types'
import { Input } from '../input/Input'
import { InputProps } from '../input/types'

export interface FormProps {
  inputs: InputProps[]
  className?: string
  inputClassName?: string
  initialValues: any
  validationSchema: Yup.ObjectSchema<any>
  onSumbit: () => void
}
export const Form = ({
  initialValues,
  inputClassName,
  inputs,
  className = 'form',
  validationSchema,
  onSumbit,
}: FormProps) => {
  const { t } = useTranslation()
  return (
    <Formik
      enableReinitialize={true}
      isInitialValid
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSumbit}>
      <FormikForm className={className}>
        {inputs &&
          inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              className={input.className || inputClassName || 'input'}
            />
          ))}
        <div className={`${className}__actions-container`}>
          <Button
            type={ButtonType.Submit}
            icon={undefined}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}>
            {t('form.submit')}
          </Button>
          <Button
            type={ButtonType.Reset}
            icon={undefined}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}>
            {t('form.reset')}
          </Button>
        </div>
      </FormikForm>
    </Formik>
  )
}
