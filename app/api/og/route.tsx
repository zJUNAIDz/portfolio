import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  try {
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
            fontFamily: 'Geist',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #333',
              borderRadius: '20px',
              padding: '40px',
              backgroundColor: 'rgba(23, 23, 23, 0.8)',
            }}
          >
            <h1
              style={{
                fontSize: 60,
                fontWeight: 800,
                margin: '0 0 20px 0',
                color: '#fff',
                lineHeight: 1.1,
                textAlign: 'center',
              }}
            >
              Junaid Shaikh
            </h1>
            <p
              style={{
                fontSize: 30,
                margin: 0,
                color: '#d1d1d1',
                textAlign: 'center',
              }}
            >
              Full-Stack Web Developer
            </p>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '20px',
              }}
            >
              {['TypeScript', 'Next.js', 'React.js', 'Node.js'].map((tech) => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: 20,
                  }}
                >
                  {tech}
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
  } catch (e) {
    return new Response('Failed to generate image. \n' + e, { status: 500 })
  }
}
