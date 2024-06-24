import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

import { Tooltip } from '@components/shared/tooltip/Tooltip.tsx'

import { Provider } from '@customTypes/interfaces.ts'

import './contact-tooltip.scss'

export const ContactTooltip = ({ provider }: { provider: Provider }) => {
  const TooltipTrigger = (
    <Button
      variant="soft"
      color="blue"
      highContrast>
      <EnvelopeClosedIcon />
    </Button>
  )

  const getTooltipContent = () => {
    const handleMailTouchStart = () =>
      (window.location.href = `mailto:${provider.email}`)
    const handleTelTouchStart = () =>
      (window.location.href = `tel:${provider.phoneNumber}`)

    return (
      <div className="contact-container">
        <a
          onTouchStart={handleMailTouchStart}
          href={`mailto:${provider.email}`}>
          {provider.email}
        </a>
        <a
          onTouchStart={handleTelTouchStart}
          href={`tel:${provider.phoneNumber}`}>
          {provider.phoneNumber}
        </a>
      </div>
    )
  }

  return (
    <Tooltip
      trigger={TooltipTrigger}
      content={getTooltipContent()}
    />
  )
}
