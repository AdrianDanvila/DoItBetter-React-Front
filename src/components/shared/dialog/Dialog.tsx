import { SetStateAction, useState } from 'react'
import { Dialog as PrimeDialog } from 'primereact/dialog'

import { Button } from '../button/Button'

import './dialog.scss'

export interface DialogProps {
  isVisible?: boolean
  setIsVisible: (value: SetStateAction<boolean>) => void
}

export const Dialog = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button
        className="button p-button p-component"
        onClick={() => setVisible(true)}
        icon={undefined}
        label="a"
      />
      <PrimeDialog
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}></PrimeDialog>
    </>
  )
}
