import { ReactNode, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { toastContext } from '@/App'

export const useToast = () => {
  const ref = useContext(toastContext)
  const { t } = useTranslation()
  const showToast = (
    severity:
      | 'success'
      | 'info'
      | 'warn'
      | 'error'
      | 'secondary'
      | 'contrast'
      | undefined,
    summary: string | ReactNode,
    message: string | ReactNode,
    content?: ReactNode,
  ) => {
    ref?.current?.show({
      icon: message,
      severity: severity,
      summary: t(summary as string),
      detail: message,
      content: content,
    })
  }

  return { showToast }
}
