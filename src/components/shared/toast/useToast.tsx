import { useContext } from 'react'

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
    summary: string,
    message: string,
  ) => {
    ref?.current?.show({
      severity: severity,
      summary: summary,
      detail: message,
    })
  }

  return { showToast }
}
