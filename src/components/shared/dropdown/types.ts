import { DropdownChangeEvent } from 'primereact/dropdown'

//Interfaces or types needed in the component , the can be used outside if needed
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
