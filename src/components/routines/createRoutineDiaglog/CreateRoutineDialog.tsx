import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PlusIcon } from '@radix-ui/react-icons'

import { RoutineForm } from '../routineForm/RoutineForm'

import { Dialog } from '@/components/shared/dialog/Dialog'

export const CreateRoutineDialog = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  return (
    <Dialog
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      openButtonClassname="button button--success"
      openButtonLabel=""
      header={t('main.routines.form.title')}
      openButtonIcon={<PlusIcon />}>
      <RoutineForm
        onSumbit={() => {
          setIsVisible(false)
        }}
      />
    </Dialog>
  )
}
