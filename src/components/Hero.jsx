import { useEffect, useRef, useState } from 'react'

const roles = ['Full Stack Developer', 'React Enthusiast', 'Node.js Builder', 'DSA Problem Solver']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  // Typewriter
  useEffect(() => {
    const target = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(184,245,66,${p.alpha})`
        ctx.fill()
      })
      // Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(184,245,66,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 4rem', position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.7 }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(184,245,66,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(66,200,245,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Grain overlay */}
      <div style={{
        position: 'absolute', inset: '-50%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        animation: 'grain 0.5s steps(1) infinite',
        pointerEvents: 'none',
        opacity: 0.4,
      }} />

      <div style={{ position: 'relative', maxWidth: 900, opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: '1.5rem',
          animation: visible ? 'fadeUp 0.6s ease 0.2s both' : 'none',
          display: 'flex', alignItems: 'center', gap: '0.75rem'
        }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--accent)' }} />
          Available for opportunities
        </div>

        <h1 style={{
          fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
          fontWeight: 800, lineHeight: 0.95,
          letterSpacing: '-0.03em',
          animation: visible ? 'fadeUp 0.7s ease 0.3s both' : 'none',
        }}>
          Jatin<br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--muted2)' }}>Yadav</span>
        </h1>

        <div style={{
          marginTop: '2rem',
          height: '2.5rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          animation: visible ? 'fadeUp 0.7s ease 0.5s both' : 'none',
        }}>
          <span style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: 'var(--accent)', fontWeight: 600 }}>{displayed}</span>
          <span style={{ width: 2, height: '1.4em', background: 'var(--accent)', display: 'inline-block', animation: 'blink 1s infinite' }} />
        </div>

        <p style={{
          marginTop: '2rem', maxWidth: 520,
          color: 'var(--muted2)', lineHeight: 1.7,
          fontSize: '1rem',
          animation: visible ? 'fadeUp 0.7s ease 0.65s both' : 'none',
        }}>
          B.Tech CSE student at LPU building full-stack web apps with React, Node.js, and real-time systems. Passionate about crafting seamless user experiences backed by scalable architecture.
        </p>

        <div style={{
          marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap',
          animation: visible ? 'fadeUp 0.7s ease 0.8s both' : 'none',
        }}>
          <a href="https://github.com/jatin-senpai" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.8rem 2rem',
            background: 'var(--accent)', color: '#000',
            fontWeight: 700, fontSize: '0.85rem',
            letterSpacing: '0.05em', borderRadius: '100px',
            border: '1px solid var(--accent)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,245,66,0.25)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <GithubIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/jatin10" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.8rem 2rem',
            background: 'transparent', color: 'var(--text)',
            fontWeight: 600, fontSize: '0.85rem',
            letterSpacing: '0.05em', borderRadius: '100px',
            border: '1px solid var(--border)',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--muted2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
          >
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        opacity: 0.35, animation: 'fadeIn 1s ease 1.5s both',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--muted2), transparent)', animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}

function GithubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}

function LinkedinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
}
