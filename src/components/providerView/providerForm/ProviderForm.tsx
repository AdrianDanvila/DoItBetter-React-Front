import { Form } from 'formik'
import { Button } from '@radix-ui/themes'

import { Input } from '@components/shared/input/Input.tsx'
import { InputProps } from '@components/shared/input/types.ts'

import { providersFormText } from '@locales/es.json'

import { FORM_CONFIG_BUSINESS, FORM_CONFIG_CONTACT } from './constants.ts'

import './provider-form.scss'

export const ProviderForm = () => (
  <Form className="provider-form">
    <h2>{providersFormText.businessDataTitle}</h2>
    <div className="provider-form__data">
      {FORM_CONFIG_BUSINESS.map(
        ({
          id,
          field,
          placeHolder,
          className,
          inputType,
          options,
          fieldTag,
        }: InputProps) => (
          <Input
            id={id}
            field={field}
            placeHolder={placeHolder}
            className={className}
            fieldTag={fieldTag}
            inputType={inputType}
            options={options}
            key={id}
          />
        ),
      )}
    </div>

    <h2>{providersFormText.contactDataTitle}</h2>
    <div className="provider-form__data">
      {FORM_CONFIG_CONTACT.map(
        ({
          id,
          field,
          placeHolder,
          className,
          inputType,
          fieldTag,
          options,
        }: InputProps) => (
          <Input
            id={id}
            field={field}
            placeHolder={placeHolder}
            className={className}
            inputType={inputType}
            fieldTag={fieldTag}
            options={options}
            key={id}
          />
        ),
      )}
    </div>

    <div className="provider-form__actions-container">
      <Button
        color="gray"
        variant="solid"
        role="save-button"
        type="submit">
        {providersFormText.save}
      </Button>
      <Button
        color="gray"
        variant="surface"
        type="reset">
        {providersFormText.reset}
      </Button>
    </div>
  </Form>
)
