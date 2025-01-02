import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { BASE_URL } from '@/constants/server'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onImageLoadError = (e: any) => {
  e.target.src = `${BASE_URL}/uploads/default.png`
}
