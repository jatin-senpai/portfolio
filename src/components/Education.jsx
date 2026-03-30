import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from './About'

const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    cgpa: '7.82',
    location: 'Punjab, India',
    period: 'Aug 2023 - Present',
    icon: '🎓',
    accent: '#b8f542',
  },
  {
    institution: 'Army Public School Devlali',
    degree: 'Intermediate',
    percentage: '88.2',
    location: 'Nashik, Maharashtra',
    period: 'Apr 2020 - Jun 2022',
    icon: '📚',
    accent: '#42c8f5',
  },
  {
    institution: 'Army Public School Delhi Cantt',
    degree: 'Matriculation',
    percentage: '90',
    location: 'Delhi Cantt, New Delhi',
    period: 'Mar 2018 - Apr 2020',
    icon: '🏫',
    accent: '#f5a542',
  },
]

export default function Education() {
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
    <section id="education" ref={ref} style={{ padding: '5rem 4rem', position: 'relative' }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(184,245,66,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184,245,66,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto' }}>
        <SectionLabel>Education</SectionLabel>

        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 800,
          marginTop: '0.5rem',
          marginBottom: '3rem',
          animation: visible ? 'fadeUp 0.8s ease 0.2s both' : 'none',
          maxWidth: 600,
        }}>
          Academic<br />
          <span style={{ color: 'var(--muted2)' }}>Journey</span>
        </h2>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          paddingLeft: '2rem',
          animation: visible ? 'fadeUp 0.8s ease 0.4s both' : 'none',
        }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }} />

          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                marginBottom: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: i !== education.length - 1 ? '1px solid var(--border)' : 'none',
                animation: visible ? `fadeUp 0.8s ease ${0.4 + i * 0.1}s both` : 'none',
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-8px',
                top: '6px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: edu.accent,
                border: '3px solid var(--bg)',
                boxShadow: `0 0 0 2px ${edu.accent}`,
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ fontSize: '2rem', minWidth: '40px' }}>{edu.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                      }}>
                        {edu.institution}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: edu.accent,
                        marginBottom: '0.5rem',
                      }}>
                        {edu.degree}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--muted2)',
                        letterSpacing: '0.05em',
                        marginBottom: '0.5rem',
                      }}>
                        {edu.period}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--muted)',
                        letterSpacing: '0.05em',
                      }}>
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--muted2)',
                    }}>
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
