import { CheckIcon, TrashIcon } from '@radix-ui/react-icons'

import { AlertModal } from '@components/shared/alertModal/AlertModal.tsx'
import { CustomButton } from '@components/shared/customButton/CustomButton.tsx'
import { ButtonColors } from '@components/shared/customButton/enums.ts'

import { providersAction } from '@locales/es.json'

import { Provider } from '@customTypes/interfaces.ts'

import { ActionButton } from './components/ActionButton.tsx'
import { ProviderDetail } from './components/ProviderDetail.tsx'

export const ActionModal = ({ provider }: { provider: Provider }) => {
  const isActive = provider.active
  const buttonColor = isActive ? ButtonColors.Red : ButtonColors.Green
  const alertTitle = isActive
    ? providersAction.deregister
    : providersAction.register

  const alertDescription = isActive
    ? providersAction.deregisterQuestion
    : providersAction.registerQuestion

  return (
    <AlertModal
      triggerButton={
        <CustomButton
          color={buttonColor}
          name="trigger-button"
          ariaLabel={providersAction.triggerButtonLabel}
          id="trigger-button">
          {isActive ? <TrashIcon /> : <CheckIcon />}
        </CustomButton>
      }
      actionButton={
        <ActionButton
          buttonColor={buttonColor}
          alertTitle={alertTitle}
          provider={provider}
        />
      }
      alertTitle={alertTitle}
      alertDescription={alertDescription}>
      <ProviderDetail provider={provider} />
    </AlertModal>
  )
}
