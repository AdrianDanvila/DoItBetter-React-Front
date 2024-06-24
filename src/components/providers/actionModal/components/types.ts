import { ButtonColors } from '@components/shared/customButton/enums.ts'

import { Provider } from '@customTypes/interfaces.ts'

export interface ActionButtonProps {
  alertTitle: string
  buttonColor: ButtonColors
  provider: Provider
}
