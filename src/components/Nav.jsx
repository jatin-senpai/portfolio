import { useEffect, useState } from 'react'

const links = ['About', 'Projects', 'Skills', 'Achievements', 'Certifications', 'Education', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.4rem 4rem',
      backdropFilter: 'blur(24px)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'border-color 0.4s, background 0.4s',
      background: scrolled ? 'rgba(6,6,8,0.85)' : 'transparent',
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--accent)' }}>
        JY<span style={{ color: 'var(--muted2)' }}>.</span>
      </div>

      {/* Desktop */}
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)} style={{
            background: 'none', border: 'none', cursor: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem', letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted2)',
            transition: 'color 0.2s',
            padding: 0,
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted2)'}
          >{l}</button>
        ))}
      </div>

      <a href="mailto:yjatin16412@gmail.com" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem', letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: '1px solid var(--border)',
        padding: '0.5rem 1.1rem',
        borderRadius: '100px',
        transition: 'border-color 0.2s, color 0.2s',
        color: 'var(--muted2)',
      }}
      onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
      onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted2)' }}
      >Hire me</a>
    </nav>
  )
}
