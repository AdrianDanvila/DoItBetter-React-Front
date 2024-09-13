import { ReactNode, useContext } from 'react'

import { toastContext } from '@/App'

export const useToast = () => {
  const ref = useContext(toastContext)

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
      summary: summary,
      detail: message,
      content: content,
    })
  }

  return { showToast }
}
