import { BreakPoints } from '@customTypes/interfaces.ts'

export const BREAKPOINTS: BreakPoints = {
  tablet: 790,
  desktop: 992,
}

export const MAX_WIDTH_TABLE: number = BREAKPOINTS.desktop - 1
export const MIN_WIDTH_TABLE: number = BREAKPOINTS.tablet - 1

export const MAX_WIDTH_MODAL: number = 500

export const SEARCH_ICON_SIZE: number = 16
