import { Home } from '@/components/home'
import { getMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = getMetadata('ja')

export default function JapaneseHomePage() {
  return <Home locale="ja" />
}
