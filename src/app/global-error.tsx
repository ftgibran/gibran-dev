'use client'

/**
 * Deliberately plain: this is the last boundary before a blank page, so it
 * renders its own document and touches neither the design system nor the intl
 * provider, either of which could be the thing that just failed.
 */
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang={'en-US'}>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          background: '#07162e',
          color: '#f3f4f6',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2rem' }}>{'Something broke'}</h1>

        <p style={{ margin: 0, color: '#babaff' }}>
          {'Sorry about that. Reloading usually clears it.'}
        </p>

        <button
          type={'button'}
          onClick={reset}
          style={{
            cursor: 'pointer',
            border: 0,
            borderRadius: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: '#3f6fbf',
            color: '#f3f4f6',
            font: 'inherit',
          }}
        >
          {'Try again'}
        </button>
      </body>
    </html>
  )
}
