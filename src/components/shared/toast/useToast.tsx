import { useRef } from 'react'
import { Toast } from 'primereact/toast'

export const useToast = () => {
  const ref = useRef<Toast>(null)

  const showError = (message: string) => {
    ref.current &&
      ref.current.show({
        severity: 'error',
        summary: 'Info',
        detail: message,
      })
  }

  const showSuccess = (message: string) => {
    ref.current &&
      ref.current.show({
        severity: 'success',
        summary: 'Info',
        detail: message,
      })
  }

  return { ref, showError, showSuccess }
}
