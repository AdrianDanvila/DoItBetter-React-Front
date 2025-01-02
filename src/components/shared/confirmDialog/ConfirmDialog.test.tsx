import { describe, expect, it, vi } from 'vitest'

import { ConfirmDialog } from './ConfirmDialog'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('ConfirmDialog', () => {
  it('renders the button correctly', () => {
    render(
      <ConfirmDialog
        openButtonLabel="Open Dialog"
        message="Are you sure?"
        header="Confirm Action"
        acceptLabel="Yes"
        rejectLabel="No"
      />,
    )

    // Verifica que el botón se renderiza correctamente con el texto esperado
    const button = screen.getByText('Open Dialog')
    expect(button).toBeInTheDocument()
  })

  it('opens the dialog when the button is clicked', async () => {
    render(
      <ConfirmDialog
        openButtonLabel="Open Dialog"
        message="Are you sure?"
        header="Confirm Action"
        acceptLabel="Yes"
        rejectLabel="No"
      />,
    )

    // Encuentra el botón y haz clic en él
    const button = screen.getByText('Open Dialog')
    fireEvent.click(button)

    // Verifica que el diálogo se hace visible
    const dialog = screen.getByRole('dialog') // `PrimeConfirmDialog` generalmente tiene un role 'dialog'
    expect(dialog).toBeInTheDocument()
    expect(dialog).toBeVisible()
  })

  it('calls onAccept when the accept button is clicked', async () => {
    const onAcceptMock = vi.fn()
    render(
      <ConfirmDialog
        openButtonLabel="Open Dialog"
        message="Are you sure?"
        header="Confirm Action"
        acceptLabel="Yes"
        rejectLabel="No"
        onAccept={onAcceptMock}
      />,
    )

    // Abre el diálogo haciendo clic en el botón
    const openButton = screen.getByText('Open Dialog')
    fireEvent.click(openButton)

    // Asegúrate de que el diálogo está visible
    const acceptButton = screen.getByText('Yes') // Verifica que el botón "Yes" está presente
    fireEvent.click(acceptButton)

    // Verifica que la función onAccept fue llamada
    await waitFor(() => {
      expect(onAcceptMock).toHaveBeenCalled()
    })
  })

  it('calls onReject when the reject button is clicked', async () => {
    const onRejectMock = vi.fn()
    render(
      <ConfirmDialog
        openButtonLabel="Open Dialog"
        message="Are you sure?"
        header="Confirm Action"
        acceptLabel="Yes"
        rejectLabel="No"
        onReject={onRejectMock}
      />,
    )

    // Abre el diálogo haciendo clic en el botón
    const openButton = screen.getByText('Open Dialog')
    fireEvent.click(openButton)

    // Asegúrate de que el diálogo está visible
    const rejectButton = screen.getByText('No') // Verifica que el botón "No" está presente
    fireEvent.click(rejectButton)

    // Verifica que la función onReject fue llamada
    await waitFor(() => {
      expect(onRejectMock).toHaveBeenCalled()
    })
  })

  it('hides the dialog when onHide is called', async () => {
    render(
      <ConfirmDialog
        openButtonLabel="Open Dialog"
        message="Are you sure?"
        header="Confirm Action"
        acceptLabel="Yes"
        rejectLabel="No"
      />,
    )

    // Abre el diálogo
    const openButton = screen.getByText('Open Dialog')
    fireEvent.click(openButton)

    // Verifica que el diálogo está visible
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    const closeButton = dialog.querySelector('[data-pc-section="closebutton"]')
    expect(closeButton).toBeInTheDocument()
    // Cierra el diálogo manualmente
    if (closeButton) fireEvent.click(closeButton) // Dispara un clic en el botón
    // Aquí podemos simular que el usuario hace clic fuera del diálogo para cerrarlo
    await waitFor(() => {
      expect(dialog).not.toBeVisible() // Verifica que el diálogo ya no está visible
    })
  })
})
