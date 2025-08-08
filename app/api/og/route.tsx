import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Junaid Shaikh - Full-Stack Web Developer'
  const subtitle = 'zjunaidz · Next.js · React · Node.js'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b0b0b',
          color: '#fff',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, marginBottom: 16 }}>{title}</div>
        <div style={{ fontSize: 28, opacity: 0.8 }}>{subtitle}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
