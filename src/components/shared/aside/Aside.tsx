// Generic component tsx file

import { PropsWithChildren, useState } from 'react'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'

import './aside.scss'

export interface AsideProps {
  isOpen?: boolean
  onHide?: () => void
  className?: string
}

export const Aside = ({
  isOpen,
  onHide,
  className,
  children,
}: PropsWithChildren<AsideProps>) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className={className ? className : ''}>
        {children}
      </Sidebar>
      <Button
        icon="pi pi-arrow-right"
        onClick={() => setVisible(true)}
      />
    </div>
  )
}
