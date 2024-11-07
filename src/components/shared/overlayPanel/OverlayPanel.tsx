import { PropsWithChildren, ReactNode, useRef } from 'react'
import { OverlayPanel as PrimeOverlayPanel } from 'primereact/overlaypanel'

export interface OverlayPanelProps {
  activationComponent: ReactNode
}

export const OverlayPanel = ({
  children,
  activationComponent,
}: PropsWithChildren<OverlayPanelProps>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const op = useRef<any>(null)
  return (
    <>
      <div
        onClick={(e) => op.current && op.current.toggle(e)}
        className="flex items-center">
        {activationComponent}
      </div>
      <PrimeOverlayPanel ref={op}>{children}</PrimeOverlayPanel>
    </>
  )
}
