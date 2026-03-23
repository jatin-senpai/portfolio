import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from './About'

const certifications = [
  {
    name: 'Introduction to Cloud Computing',
    org: 'NPTEL',
    date: 'Jun 2025',
    icon: '☁️',
    accent: '#42c8f5',
    link: 'https://drive.google.com/file/d/1JIrxKmQ56FDt36-YjLx8c4KMotFdBEfm/view?usp=sharing',
  },
  {
    name: 'Basics of Data Structures and Algorithms',
    org: 'LPU',
    date: 'Nov 2025',
    icon: '📊',
    accent: '#b8f542',
    link: 'https://drive.google.com/file/d/11VZ0b98SsyVv8JvFrVPNo0kb6hHd3sC8/view?usp=sharing',
  },
]

export default function Certifications() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    )
    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" ref={ref} style={{ padding: '5rem 4rem', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(184,245,66,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184,245,66,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionLabel>Certifications</SectionLabel>

        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 800,
          marginTop: '0.5rem',
          marginBottom: '3rem',
          animation: visible ? 'fadeUp 0.8s ease 0.2s both' : 'none',
          maxWidth: 600,
        }}>
          Certifications
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          animation: visible ? 'fadeUp 0.8s ease 0.4s both' : 'none',
        }}>
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link || '#'}
              target={cert.link ? '_blank' : '_self'}
              rel={cert.link ? 'noopener noreferrer' : ''}
              style={{
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                background: 'linear-gradient(135deg, rgba(184,245,66,0.02), rgba(66,200,245,0.02))',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cert.accent
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 16px 32px ${cert.accent}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: cert.accent,
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>{cert.icon}</div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted2)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {cert.org}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {cert.name}
                  </h3>
                </div>
              </div>

              <div style={{
                fontSize: '0.85rem',
                color: cert.accent,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}>
                {cert.date}
              </div>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          animation: visible ? 'fadeUp 0.8s ease 0.6s both' : 'none',
        }}>
          <div>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}>
              {certifications.length}
            </div>
            <p style={{ color: 'var(--muted2)', fontSize: '0.95rem' }}>Professional Certifications</p>
          </div>
          <div>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#42c8f5',
              marginBottom: '0.5rem',
            }}>
              2025
            </div>
            <p style={{ color: 'var(--muted2)', fontSize: '0.95rem' }}>Most Recent</p>
          </div>
        </div>
      </div>
    </section>
  )
}
