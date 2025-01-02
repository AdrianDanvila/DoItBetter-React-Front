import { useTranslation } from 'react-i18next'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Card } from './Card'

import { render, screen } from '@testing-library/react'

// Mock del hook useTranslation usando Vitest
vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}))

describe('Card component', () => {
  beforeEach(() => {
    // Configurar el mock de useTranslation antes de cada prueba
    ;(useTranslation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      t: (key: string) => key, // Devuelve la clave como traducción
    })
  })

  it('renders the title and children correctly', () => {
    const title = 'test.title'
    const childrenContent = 'This is a child content'
    const className = 'custom-class'

    render(
      <Card
        title={title}
        className={className}>
        {childrenContent}
      </Card>,
    )

    // Verifica que el título se renderiza correctamente
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('text-center', 'text-blue-600', className)

    // Verifica que los children se renderizan correctamente
    const childrenElement = screen.getByText(childrenContent)
    expect(childrenElement).toBeInTheDocument()
  })

  it('applies custom classes to the ShadCard', () => {
    const className = 'custom-class'

    render(
      <Card
        title="test.title"
        className={className}>
        Test content
      </Card>,
    )

    // Usa un rol adecuado si es aplicable
    expect(screen.getByTestId('testid-card')).toHaveClass(
      'w-full',
      'rounded-none',
      'md:rounded-xl',
      className,
    )
  })
})
