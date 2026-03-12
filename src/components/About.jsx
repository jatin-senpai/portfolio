import { useEffect, useRef } from 'react'

const stats = [
  { value: '100+', label: 'DSA Problems Solved' },
  { value: '3', label: 'Full Stack Projects' },
  { value: '7.88', label: 'CGPA at LPU' },
  { value: '1000+', label: 'Competition Participants Beaten' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { ref.current?.classList.add('in-view') } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" style={{ padding: '8rem 4rem', position: 'relative' }}>
      {/* Section label */}
      <SectionLabel text="About" />

      <div ref={ref} className="reveal-block" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            Crafting digital<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--muted2)' }}>experiences</span>
          </h2>
          <p style={{ color: 'var(--muted2)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.5rem' }}>
            I'm a Computer Science undergraduate at Lovely Professional University, Punjab, building modern web applications with a focus on performance, scalability, and great UX.
          </p>
          <p style={{ color: 'var(--muted2)', lineHeight: 1.8, fontSize: '1rem' }}>
            From real-time collaborative tools to AI-powered agri-tech, I love tackling problems that matter. When I'm not coding, I'm sharpening my problem-solving skills on LeetCode or competing in quizzes.
          </p>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
            <a href="https://linkedin.com/in/jatin10" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--accent)', borderBottom: '1px solid var(--accent)',
              paddingBottom: 2,
            }}>Connect on LinkedIn →</a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'var(--surface)',
              padding: '2.5rem 2rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
            >
              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--accent)' }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted2)', marginTop: '0.5rem', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal-block { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-block.in-view { opacity: 1; transform: none; }
      `}</style>
    </section>
  )
}

export function SectionLabel({ text }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '1rem',
      fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
      letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'var(--muted)', marginBottom: '4rem',
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--muted)' }} />
      {text}
    </div>
  )
}
