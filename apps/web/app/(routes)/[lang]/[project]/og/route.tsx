import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

import '@/app/globals.css'
import { getDictionary } from '@/dictionaries'
import { getProjectBySlug } from '@/lib/projects'

type Params = {
  project: string
}
export const runtime = 'edge'
const siteUrl = `https://${process.env.NEXT_PUBLIC_APP_URL}`

export async function GET(req: NextRequest, context: { params: Params }) {
  try {
    const dict = await getDictionary('en')
    const project = await getProjectBySlug(context.params.project, dict)
    siteUrl
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: '#17171b',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              marginRight: '20px',
            }}
          >
            <p
              style={{
                fontWeight: 'bold',
                marginBottom: '0px',
                fontSize: 32,
                color: 'white',
              }}
            >
              {project?.title}
            </p>
            <p style={{ color: '#ef4444', fontSize: '18px', marginTop: '0px' }}>
              {project?.pitch}
            </p>
          </div>
          {project?.heroImage ? (
            <div style={{ display: 'flex', position: 'relative' }}>
              <svg
                style={{
                  position: 'absolute',
                  top: '-300px',
                  left: '-100px',
                  opacity: '0.2',
                }}
                viewBox="0 0 900 600"
                width="900"
                height="600"
                version="1.1"
              >
                <g transform="translate(444.3593826782917 273.8643784322123)">
                  <path
                    fill="#ef4444"
                    d="M186.1 -166.4C230.8 -141.4 249.4 -70.7 237.7 -11.7C226 47.4 184.1 94.8 139.4 139.9C94.8 185.1 47.4 228 -2.2 230.3C-51.9 232.5 -103.7 194 -149.2 148.9C-194.7 103.7 -233.9 51.9 -229.5 4.4C-225.1 -43.1 -177.3 -86.3 -131.8 -111.3C-86.3 -136.3 -43.1 -143.1 13.8 -156.9C70.7 -170.7 141.4 -191.4 186.1 -166.4"
                  />
                </g>
              </svg>
              <img
                alt=""
                style={{
                  objectFit: 'cover',
                  margin: 'auto',
                  border: '8px solid #ef4444',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                }}
                width={300}
                height={300}
                src={`${siteUrl}${project?.heroImage.replace('.webp', '.png')}`}
              />
            </div>
          ) : null}
        </div>
      </div>,
      {
        width: 1200,
        height: 627,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
