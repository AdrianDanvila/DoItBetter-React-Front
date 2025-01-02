import { describe, expect, it, vi } from 'vitest'
import { PersonIcon } from '@radix-ui/react-icons'

import { Button } from './Button'
import { ButtonSeverity, ButtonType } from './types'

import { fireEvent, render, screen } from '@testing-library/react'

describe('Button component', () => {
  it('renders the label and children correctly', () => {
    render(
      <Button
        label="Click me"
        className="custom-class"
        icon={undefined}
        severity={ButtonSeverity.Danger}>
        <span>Child content</span>
      </Button>,
    )

    // Verifica que el label se renderiza correctamente
    const labelElement = screen.getByText('Click me')
    expect(labelElement).toBeInTheDocument()

    // Verifica que los children se renderizan correctamente
    const childElement = screen.getByText('Child content')
    expect(childElement).toBeInTheDocument()
  })

  it('applies the correct severity class by default', () => {
    render(
      <Button
        label="Default button"
        icon={undefined}
      />,
    )

    const buttonElement = screen.getByText('Default button').closest('button')
    expect(buttonElement).toHaveClass('button--primary') // Clase por defecto
  })

  it('applies a custom severity class when provided', () => {
    render(
      <Button
        label="Danger button"
        severity={ButtonSeverity.Danger}
        icon={undefined}
      />,
    )

    const buttonElement = screen.getByText('Danger button').closest('button')
    expect(buttonElement).toHaveClass('button--danger')
  })

  it('triggers the onClick event handler when clicked', () => {
    const handleClick = vi.fn()
    render(
      <Button
        label="Clickable button"
        onClick={handleClick}
        icon={undefined}
        severity={ButtonSeverity.Danger}
      />,
    )

    const buttonElement = screen.getByText('Clickable button')
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders the icon if provided', () => {
    render(
      <Button
        label="Button with icon"
        icon={<PersonIcon />}
        severity={ButtonSeverity.Danger}
      />,
    )

    const iconElement = screen.getByText('Button with icon')
    expect(iconElement).toBeInTheDocument() // Verifica que existe
    const svgElement = iconElement.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
  })

  it('renders with the correct type attribute', () => {
    render(
      <Button
        label="Submit button"
        type={ButtonType.Submit}
        icon={undefined}
        severity={ButtonSeverity.Danger}
      />,
    )

    const buttonElement = screen.getByText('Submit button').closest('button')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })

  it('applies additional custom classes', () => {
    render(
      <Button
        label="Custom class button"
        className="extra-class"
        icon={undefined}
        severity={ButtonSeverity.Danger}
      />,
    )

    const buttonElement = screen
      .getByText('Custom class button')
      .closest('button')
    expect(buttonElement).toHaveClass('extra-class')
  })
})
