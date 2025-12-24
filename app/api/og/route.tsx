import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  // const { searchParams } = new URL(req.url)
  const title = 'Junaid Shaikh'
  const description = 'Full-Stack Developer'
  const skills = ['TypeScript', 'Go', 'DSA', 'React', 'Hono', 'Docker', 'PostgreSQL', 'Linux']
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
          backgroundColor: '#000000',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            border: '1px solid #333',
            backgroundColor: '#050505',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '24px 40px',
              borderBottom: '1px solid #333',
            }}
          >
            <div style={{ fontSize: 24, color: '#666', fontWeight: 600, letterSpacing: '-0.02em' }}>
              zjunaidz/portfolio
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#333' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#333' }} />
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              padding: '0 40px',
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 36,
                color: '#888',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              {description}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              padding: '24px 40px',
              borderTop: '1px solid #333',
              backgroundColor: '#0a0a0a',
              gap: '12px',
            }}
          >
            {skills.map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 16px',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  color: '#ccc',
                  fontSize: 18,
                  backgroundColor: '#000',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
