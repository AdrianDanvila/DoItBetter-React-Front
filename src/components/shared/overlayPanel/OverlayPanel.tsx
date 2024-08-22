import { PropsWithChildren, ReactNode, useRef } from 'react'
import { OverlayPanel as PrimeOverlayPanel } from 'primereact/overlaypanel'

export interface OverlayPanelProps {
  activationComponent: ReactNode
}

export const OverlayPanel = ({
  children,
  activationComponent,
}: PropsWithChildren<OverlayPanelProps>) => {
  const op = useRef(null)
  return (
    <>
      <div>{activationComponent}</div>
      <PrimeOverlayPanel ref={op}>{children}</PrimeOverlayPanel>
    </>
  )
}
