import { providersText } from '@locales/es.json'

import type { ConstantObjectData } from '@customTypes/interfaces.ts'

export const TABLE_DATA: ConstantObjectData[] = [
  {
    reference: 'businessName',
    title: providersText.header.business,
  },
  {
    reference: 'province',
    title: providersText.header.province,
  },
  {
    reference: 'contact',
    title: providersText.header.contact,
  },
  {
    reference: 'sector',
    title: providersText.header.sector,
  },
]
