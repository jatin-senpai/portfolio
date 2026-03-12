import { useEffect, useRef } from 'react'
import { SectionLabel } from './About'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 65 },
      { name: 'C', level: 70 },
    ]
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML/CSS', level: 85 },
    ]
  },
  {
    category: 'Backend',
    icon: '⬡',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'WebSocket', level: 75 },
    ]
  },
  {
    category: 'Database & Tools',
    icon: '◎',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Git/GitHub', level: 88 },
      { name: 'TurboRepo', level: 70 },
    ]
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('skills-in-view') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" style={{ padding: '8rem 4rem', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel text="Skills" />
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '4rem' }}>
          Tech<br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--muted2)' }}>arsenal</span>
        </h2>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {skillGroups.map((group, gi) => (
            <div key={gi} style={{
              background: 'var(--surface)', padding: '2.5rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent)' }}>{group.icon}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted2)' }}>{group.category}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {group.skills.map((s, si) => (
                  <div key={si}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{s.name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)' }}>{s.level}%</span>
                    </div>
                    <div style={{ height: 2, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
                      <div className="skill-bar" style={{
                        height: '100%',
                        width: `${s.level}%`,
                        background: `linear-gradient(90deg, var(--accent), rgba(184,245,66,0.5))`,
                        borderRadius: 2,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: `transform 0.8s ease ${gi * 0.1 + si * 0.07}s`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-in-view .skill-bar { transform: scaleX(1) !important; }
      `}</style>
    </section>
  )
}
