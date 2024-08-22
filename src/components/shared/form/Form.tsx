import { useTranslation } from 'react-i18next'
import { Form as FormikForm, Formik, FormikValues } from 'formik'

import { Button } from '../button/Button'
import { ButtonType } from '../button/types'
import { Input } from '../input/Input'

import { FormProps } from './types'

import './form.scss'

export const Form = <T extends FormikValues>({
  initialValues,
  inputClassName,
  inputs,
  className = 'form',
  validationSchema,
  onSumbit,
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
        <div className={`${className}__inputs-container`}>
          {inputs &&
            inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                className={input.className || inputClassName || 'input'}
              />
            ))}
        </div>

        <div className={`${className}__actions-container`}>
          <Button
            type={ButtonType.Submit}
            icon={undefined}>
            {t('form.submit') || t('form.reset')}
          </Button>
        </div>
      </FormikForm>
    </Formik>
  )
}
