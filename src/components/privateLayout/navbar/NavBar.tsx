/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'

import { NavbarProps } from './types'

import './navbar.scss'

import { AppSidebar } from '@/components/ui/AppSidebar'

export const NavBar = ({ isOpen, onHide }: NavbarProps) => {
  const op = useRef(null)
  const [isNavOpen, setIsNavOpen] = useState(true)

  return (
    <>
      <AppSidebar />
    </>
  )
}
