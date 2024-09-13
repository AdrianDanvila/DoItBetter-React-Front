import { PlusIcon } from '@radix-ui/react-icons'

import { RoutineForm } from '../routineForm/RoutineForm'

import { Dialog } from '@/components/shared/dialog/Dialog'

export const CreateRoutineDialog = () => (
  <Dialog
    openButtonClassname="button--success"
    openButtonLabel=""
    openButtonIcon={<PlusIcon />}>
    <RoutineForm />
  </Dialog>
)
