import React from 'react'

import { SetSearchTerm } from '@components/types.ts'

import { ProviderStatus } from '@customTypes/enums.ts'

export interface StatusTable {
  statusType: ProviderStatus
}

export interface HeaderProps extends StatusTable, SetSearchTerm {
  children?: React.ReactNode
}
