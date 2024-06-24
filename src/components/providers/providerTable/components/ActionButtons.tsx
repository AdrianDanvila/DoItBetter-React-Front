import { useNavigate } from 'react-router-dom'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

import { ActionModal } from '@components/providers/actionModal/ActionModal.tsx'

import { Path } from '@router/constants.ts'

import { Provider } from '@customTypes/interfaces.ts'

import { ContactTooltip } from './ContactTooltip.tsx'

export const ActionButtons = ({ provider }: { provider: Provider }) => {
  const navigate = useNavigate()

  const onClickEditHandler = () =>
    navigate(Path.editProvider + `/${provider.id}`)

  return (
    <>
      <Button
        onClick={onClickEditHandler}
        variant="soft"
        color="gray"
        highContrast>
        <Pencil2Icon />
      </Button>
      <ActionModal provider={provider} />
      <ContactTooltip provider={provider} />
    </>
  )
}
