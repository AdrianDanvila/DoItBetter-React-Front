// Generic component tsx file

import { PropsWithChildren } from 'react'
import { Sidebar } from 'primereact/sidebar'

import { AsideProps } from './types'

import './aside.scss'

export const Aside = ({
  isOpen,
  onHide,
  className,
  children,
  header,
}: PropsWithChildren<AsideProps>) => (
  <section className=" flex justify-content-center">
    <Sidebar
      showCloseIcon={false}
      header={header}
      blockScroll={true}
      visible={isOpen}
      onHide={onHide}
      className={className ? className : ''}>
      {children}
    </Sidebar>
  </section>
)
