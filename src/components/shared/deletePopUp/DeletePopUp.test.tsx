import { describe, expect, it, vi } from 'vitest'

import { DeletePopUp } from './DeletePopUp'

import { fireEvent, render, screen } from '@testing-library/react'

describe('DeletePopUp Component', () => {
  it('renders the delete button', () => {
    const onAcceptMock = vi.fn()
    const onRejectMock = vi.fn()

    // Renderiza el componente
    render(
      <DeletePopUp
        onAccept={onAcceptMock}
        onReject={onRejectMock}
      />,
    )

    // Encuentra el botón de eliminar
    const deleteButton = screen.getByTestId('testid-delete-button')

    // Verifica que el botón de eliminar está presente
    expect(deleteButton).toBeInTheDocument()
  })

  it('shows the ConfirmPopup when the delete button is clicked', () => {
    const onAcceptMock = vi.fn()
    const onRejectMock = vi.fn()

    // Renderiza el componente
    render(
      <DeletePopUp
        onAccept={onAcceptMock}
        onReject={onRejectMock}
      />,
    )

    // Encuentra el botón de eliminar
    const deleteButton = screen.getByTestId('testid-delete-button')

    // Haz clic en el botón de eliminar
    fireEvent.click(deleteButton)

    // Verifica que el popup (ConfirmPopup) ahora es visible
    expect(screen.getByText(/delete_pop.message/i)).toBeInTheDocument()
  })

  it('calls onAccept when the accept button is clicked', () => {
    const onAcceptMock = vi.fn()
    const onRejectMock = vi.fn()

    // Renderiza el componente
    render(
      <DeletePopUp
        onAccept={onAcceptMock}
        onReject={onRejectMock}
      />,
    )

    // Encuentra el botón de eliminar
    const deleteButton = screen.getByTestId('testid-delete-button')

    // Haz clic en el botón de eliminar para abrir el popup
    fireEvent.click(deleteButton)

    // Encuentra el botón de aceptar
    const acceptButton = screen.getByLabelText('Yes')

    // Haz clic en el botón de aceptar
    fireEvent.click(acceptButton)

    // Verifica que la función onAccept haya sido llamada
    expect(onAcceptMock).toHaveBeenCalled()
  })

  it('calls onReject when the reject button is clicked', () => {
    const onAcceptMock = vi.fn()
    const onRejectMock = vi.fn()

    // Renderiza el componente
    render(
      <DeletePopUp
        onAccept={onAcceptMock}
        onReject={onRejectMock}
      />,
    )

    // Encuentra el botón de eliminar
    const deleteButton = screen.getByTestId('testid-delete-button')

    // Haz clic en el botón de eliminar para abrir el popup
    fireEvent.click(deleteButton)

    // Encuentra el botón de rechazar
    const rejectButton = screen.getByLabelText('No')

    // Haz clic en el botón de rechazar
    fireEvent.click(rejectButton)

    // Verifica que la función onReject haya sido llamada
    expect(onRejectMock).toHaveBeenCalled()
  })
})
