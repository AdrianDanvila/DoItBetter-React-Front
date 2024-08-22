import { Dropdown as PrimeDropDown } from 'primereact/dropdown'

import { DropdownProps } from './types'

export const Dropdown = ({
  className,
  options,
  onChange,
  defaultValue,
}: DropdownProps) => (
  <PrimeDropDown
    focusOnHover={true}
    className={className ? className : 'default-select'}
    value={defaultValue}
    optionLabel="label"
    optionValue="value"
    onChange={(e) => (onChange ? onChange(e) : null)}
    options={options}
  />
)
