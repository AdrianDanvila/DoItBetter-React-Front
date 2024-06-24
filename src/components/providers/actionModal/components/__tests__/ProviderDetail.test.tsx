import { expect } from 'vitest'

import providers from '@api/__mocks__/providers.json'

import { TABLE_DATA } from '@components/providers/constants.ts'

import { ConstantObjectData } from '@customTypes/interfaces.ts'

import { ProviderDetail } from '../ProviderDetail.tsx'

import { render, screen } from '@testing-library/react'

describe('ProviderDetail', () => {
  it('should have the established headers', () => {
    const provider = providers.actives[0][0]
    provider.active = true
    const modalReferences = ['businessName', 'province', 'sector']
    const MODAL_TABLE_DATA: ConstantObjectData[] = TABLE_DATA.filter(
      ({ reference }) => modalReferences.includes(reference),
    )
    render(<ProviderDetail provider={provider} />)
    expect(screen.getAllByRole('rowgroup', { name: 'table headers' }))
    MODAL_TABLE_DATA.map(({ title }: ConstantObjectData) =>
      expect(screen.getByRole('columnheader', { name: title })),
    )
  })
})
