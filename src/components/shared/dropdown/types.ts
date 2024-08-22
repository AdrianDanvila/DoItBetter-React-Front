import { DropdownChangeEvent } from 'primereact/dropdown'

export interface DropdowntData {
  label: string
  value: string
}

export interface DropdownProps {
  className?: string
  options: DropdowntData[]
  defaultValue?: string
  onChange?: (e: DropdownChangeEvent) => void
}
