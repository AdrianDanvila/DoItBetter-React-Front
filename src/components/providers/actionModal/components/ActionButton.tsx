import { ToggleActiveStatus } from '@api/services.ts'

import { fetchProvidersByStatus } from '@store/providersSlice.ts'

import { CustomButton } from '@components/shared/customButton/CustomButton.tsx'

import { useAppDispatch, useAppSelector } from '@helpers/hooks.ts'

import { providersAction } from '@locales/es.json'

import { DEFAULT_FETCH_PROVIDERS } from './constants.ts'
import { ActionButtonProps } from './types.ts'

export const ActionButton = ({
  provider,
  buttonColor,
  alertTitle,
}: ActionButtonProps) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.providers)

  const handleClickActionButton = async () => {
    await ToggleActiveStatus(provider)

    dispatch(
      fetchProvidersByStatus({
        ...DEFAULT_FETCH_PROVIDERS,
        numPage: state.actives.currentPage,
      }),
    )
    dispatch(
      fetchProvidersByStatus({
        ...DEFAULT_FETCH_PROVIDERS,
        numPage: state.inactives.currentPage,
        isActive: false,
      }),
    )
  }
  return (
    <CustomButton
      id="action-button"
      color={buttonColor}
      name="action-button"
      ariaLabel={providersAction.actionButtonLabel}
      onClick={handleClickActionButton}>
      {alertTitle}
    </CustomButton>
  )
}
