import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from './About'

const projects = [
  {
    number: '01',
    title: 'Kishan Sahayak',
    subtitle: 'Crop Advisory Website',
    description: 'Full-stack React + Node.js platform using a point-based scoring system to recommend optimal crops with intercropping suggestions. Integrates real-time weather data, live mandi prices, and a Gemini-powered chatbot that boosted user engagement by ~35%.',
    tags: ['React', 'Node.js', 'Gemini API', 'REST APIs', 'JavaScript'],
    github: 'https://github.com/jatin-senpai/crop-advisory',
    live: 'https://kisanshayak.onrender.com/',
    accent: '#b8f542',
    period: 'Nov–Dec 2025',
    highlight: 'AI-Powered',
    mockup: 'kisan',
  },
  {
    number: '02',
    title: 'SketchFlow',
    subtitle: 'Collaborative Digital Canvas',
    description: 'Real-time collaborative sketching app built with TypeScript, Next.js, and WebSocket. Custom drawing engine with 5 tools, Mermaid.js diagrams, WebSocket sync supporting 10,000 concurrent users at ~60 FPS. Turborepo monorepo cut build times by ~40%.',
    tags: ['Next.js', 'TypeScript', 'WebSocket', 'MySQL', 'TurboRepo'],
    github: 'https://github.com/jatin-senpai/community-draw-app',
    live: 'https://sketchflow-tb1f.onrender.com/',
    accent: '#42c8f5',
    period: 'Aug–Sep 2025',
    highlight: 'Real-Time',
    mockup: 'sketch',
  },
  {
    number: '03',
    title: 'Second Brain',
    subtitle: 'Centralized Knowledge Hub',
    description: 'Personal knowledge management system using React, Express, TypeScript, and MongoDB. Features JWT auth, complete CRUD workflows, 5+ reusable components reducing duplicate code by ~35%, and a clean responsive UI for structured note storage and retrieval.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/jatin-senpai/second-brain',
    live: null,
    accent: '#f5a542',
    period: 'May 2025',
    highlight: 'Full Stack',
    mockup: 'brain',
  },
]

function KisanMockup() {
  return (
    <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="420" height="260" rx="10" fill="#0a1a06" />
      <rect width="420" height="32" rx="10" fill="#0f2209" />
      <rect y="22" width="420" height="10" fill="#0f2209" />
      <circle cx="14" cy="16" r="5" fill="#ff5f57" />
      <circle cx="30" cy="16" r="5" fill="#febc2e" />
      <circle cx="46" cy="16" r="5" fill="#28c840" />
      <rect x="70" y="9" width="280" height="14" rx="7" fill="#1a3010" />
      <text x="210" y="20" textAnchor="middle" fill="#4a7a30" fontSize="7" fontFamily="monospace">kisanshayak.onrender.com</text>
      <rect x="0" y="32" width="420" height="28" fill="#0d1f07" />
      <text x="16" y="51" fill="#b8f542" fontSize="11" fontWeight="bold" fontFamily="sans-serif">🌾 KisanShayak</text>
      <text x="240" y="51" fill="#5a8a40" fontSize="8" fontFamily="sans-serif">Home</text>
      <text x="270" y="51" fill="#5a8a40" fontSize="8" fontFamily="sans-serif">Crops</text>
      <text x="300" y="51" fill="#5a8a40" fontSize="8" fontFamily="sans-serif">Market</text>
      <text x="330" y="51" fill="#5a8a40" fontSize="8" fontFamily="sans-serif">Weather</text>
      <rect x="365" y="42" width="42" height="13" rx="6" fill="#b8f542" />
      <text x="386" y="51" textAnchor="middle" fill="#000" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Ask AI</text>
      <rect x="0" y="60" width="420" height="65" fill="#091504" />
      <text x="210" y="85" textAnchor="middle" fill="#b8f542" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Smart Crop Advisory</text>
      <text x="210" y="100" textAnchor="middle" fill="#4a7a30" fontSize="8" fontFamily="sans-serif">AI-powered recommendations for Indian farmers</text>
      <rect x="150" y="107" width="55" height="12" rx="6" fill="#b8f542" />
      <text x="177" y="116" textAnchor="middle" fill="#000" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Get Advice</text>
      <rect x="213" y="107" width="55" height="12" rx="6" fill="none" stroke="#b8f54280" />
      <text x="240" y="116" textAnchor="middle" fill="#b8f542" fontSize="7" fontFamily="sans-serif">Live Prices</text>
      <rect x="8" y="133" width="118" height="62" rx="6" fill="#0f2209" stroke="#b8f54220" />
      <text x="20" y="148" fill="#b8f542" fontSize="9" fontWeight="bold" fontFamily="sans-serif">🌦 Weather</text>
      <text x="20" y="162" fill="#4a8a30" fontSize="18" fontWeight="bold" fontFamily="sans-serif">28°C</text>
      <text x="20" y="174" fill="#3a6a20" fontSize="7" fontFamily="sans-serif">Humidity: 72%</text>
      <text x="20" y="184" fill="#3a6a20" fontSize="7" fontFamily="sans-serif">Wind: 12 km/h NW</text>
      <rect x="134" y="133" width="118" height="62" rx="6" fill="#0f2209" stroke="#b8f54220" />
      <text x="146" y="148" fill="#b8f542" fontSize="9" fontWeight="bold" fontFamily="sans-serif">📊 Mandi Prices</text>
      <text x="146" y="162" fill="#e0e0e0" fontSize="8" fontFamily="sans-serif">Wheat — ₹2,275/qtl</text>
      <text x="146" y="173" fill="#e0e0e0" fontSize="8" fontFamily="sans-serif">Rice  — ₹2,183/qtl</text>
      <text x="146" y="184" fill="#e0e0e0" fontSize="8" fontFamily="sans-serif">Maize — ₹1,962/qtl</text>
      <rect x="260" y="133" width="152" height="62" rx="6" fill="#0a1a06" stroke="#b8f54230" />
      <text x="272" y="148" fill="#b8f542" fontSize="9" fontWeight="bold" fontFamily="sans-serif">🤖 AI Chatbot</text>
      <rect x="270" y="153" width="130" height="14" rx="4" fill="#0f2209" />
      <text x="278" y="163" fill="#4a8a30" fontSize="7" fontFamily="sans-serif">What should I grow in Punjab?</text>
      <rect x="270" y="170" width="105" height="18" rx="4" fill="#162e0e" />
      <text x="278" y="179" fill="#b8f542" fontSize="6.5" fontFamily="sans-serif">Recommend: Wheat + Mustard</text>
      <text x="278" y="186" fill="#b8f542" fontSize="6.5" fontFamily="sans-serif">intercrop for Dec sowing.</text>
      <rect x="0" y="200" width="420" height="60" fill="#060e03" />
      <text x="210" y="222" textAnchor="middle" fill="#2a4a18" fontSize="7" fontFamily="sans-serif">© 2025 KisanShayak — Empowering Indian Farmers with Technology</text>
      <text x="210" y="238" textAnchor="middle" fill="#1a3a0e" fontSize="6.5" fontFamily="sans-serif">Built with React · Node.js · Gemini API · Open Weather API</text>
    </svg>
  )
}

function SketchMockup() {
  return (
    <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="420" height="260" rx="10" fill="#050d1a" />
      <rect width="420" height="32" rx="10" fill="#080f1e" />
      <rect y="22" width="420" height="10" fill="#080f1e" />
      <circle cx="14" cy="16" r="5" fill="#ff5f57" />
      <circle cx="30" cy="16" r="5" fill="#febc2e" />
      <circle cx="46" cy="16" r="5" fill="#28c840" />
      <rect x="70" y="9" width="280" height="14" rx="7" fill="#0d1a30" />
      <text x="210" y="20" textAnchor="middle" fill="#305080" fontSize="7" fontFamily="monospace">sketchflow-tb1f.onrender.com</text>
      <rect x="0" y="32" width="44" height="228" fill="#070e1c" />
      {['✏️','⬜','⭕','➖','🔤','↩️','↪️'].map((icon, i) => (
        <g key={i}>
          <rect x="6" y={44 + i*28} width="32" height="24" rx="6" fill={i===0 ? '#1a3a6a' : 'transparent'} />
          <text x="22" y={60 + i*28} textAnchor="middle" fontSize="12">{icon}</text>
        </g>
      ))}
      <rect x="44" y="32" width="376" height="28" fill="#09111f" />
      <text x="130" y="50" fill="#42c8f5" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⚡ SketchFlow</text>
      <rect x="240" y="38" width="70" height="16" rx="4" fill="#0d2035" />
      <text x="275" y="49" textAnchor="middle" fill="#42c8f5" fontSize="7" fontFamily="sans-serif">🟢 3 online</text>
      <rect x="320" y="38" width="55" height="16" rx="4" fill="#42c8f520" stroke="#42c8f540" />
      <text x="347" y="49" textAnchor="middle" fill="#42c8f5" fontSize="7" fontFamily="sans-serif">Share Room</text>
      <rect x="380" y="38" width="32" height="16" rx="4" fill="#42c8f5" />
      <text x="396" y="49" textAnchor="middle" fill="#000" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Save</text>
      <rect x="44" y="60" width="376" height="200" fill="#06101e" />
      {Array.from({length: 12}, (_,col) => Array.from({length: 8}, (_,row) => (
        <circle key={`${col}-${row}`} cx={60 + col*30} cy={75 + row*22} r="0.8" fill="#1a2a40" />
      )))}
      <rect x="80" y="80" width="100" height="70" rx="4" fill="none" stroke="#42c8f5" strokeWidth="2" />
      <text x="130" y="120" textAnchor="middle" fill="#42c8f5" fontSize="9" fontFamily="sans-serif">User Flow</text>
      <circle cx="280" cy="110" r="35" fill="none" stroke="#b8f542" strokeWidth="2" />
      <text x="280" y="113" textAnchor="middle" fill="#b8f542" fontSize="8" fontFamily="sans-serif">API</text>
      <line x1="180" y1="115" x2="245" y2="115" stroke="#888" strokeWidth="1.5" strokeDasharray="4,3" />
      <rect x="90" y="175" width="130" height="50" rx="4" fill="#0d1a2e" stroke="#42c8f530" />
      <text x="100" y="191" fill="#42c8f580" fontSize="6.5" fontFamily="monospace">graph TD</text>
      <text x="100" y="201" fill="#42c8f580" fontSize="6.5" fontFamily="monospace">  A[Login] --&gt; B[Canvas]</text>
      <text x="100" y="211" fill="#42c8f580" fontSize="6.5" fontFamily="monospace">  B --&gt; C[Sync]</text>
      <path d="M320 165 L328 185 L330 177 L338 179 Z" fill="#b8f542" />
      <rect x="330" y="162" width="38" height="12" rx="6" fill="#b8f542" />
      <text x="349" y="171" textAnchor="middle" fill="#000" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">Jatin</text>
      <path d="M240 195 L248 215 L250 207 L258 209 Z" fill="#f5a542" />
      <rect x="250" y="192" width="40" height="12" rx="6" fill="#f5a542" />
      <text x="270" y="201" textAnchor="middle" fill="#000" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">Guest</text>
      <rect x="44" y="248" width="376" height="12" fill="#07101e" />
      <text x="55" y="257" fill="#305060" fontSize="6" fontFamily="monospace">WebSocket · 60fps · 10,000 concurrent users supported</text>
    </svg>
  )
}

function BrainMockup() {
  return (
    <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="420" height="260" rx="10" fill="#100a04" />
      <rect width="420" height="32" rx="10" fill="#1a1008" />
      <rect y="22" width="420" height="10" fill="#1a1008" />
      <circle cx="14" cy="16" r="5" fill="#ff5f57" />
      <circle cx="30" cy="16" r="5" fill="#febc2e" />
      <circle cx="46" cy="16" r="5" fill="#28c840" />
      <rect x="70" y="9" width="280" height="14" rx="7" fill="#231508" />
      <text x="210" y="20" textAnchor="middle" fill="#6a4020" fontSize="7" fontFamily="monospace">second-brain.app</text>
      <rect x="0" y="32" width="110" height="228" fill="#0d0803" />
      <text x="14" y="56" fill="#f5a542" fontSize="10" fontWeight="bold" fontFamily="sans-serif">🧠 Second Brain</text>
      <line x1="8" y1="63" x2="102" y2="63" stroke="#2a1a08" />
      {['📁 All Notes','⭐ Favorites','🏷 Tags','📌 Pinned','🔗 Links','🎥 Videos','🐦 Tweets'].map((item, i) => (
        <g key={i}>
          <rect x="6" y={70 + i*24} width="98" height="20" rx="4" fill={i===0 ? '#2a1a08' : 'transparent'} />
          <text x="14" y={84 + i*24} fill={i===0 ? '#f5a542' : '#5a3a18'} fontSize="8" fontFamily="sans-serif">{item}</text>
        </g>
      ))}
      <rect x="110" y="32" width="310" height="28" fill="#120c04" />
      <rect x="122" y="39" width="160" height="14" rx="7" fill="#1e1208" />
      <text x="132" y="49" fill="#4a2a10" fontSize="7" fontFamily="sans-serif">🔍  Search notes...</text>
      <rect x="300" y="39" width="55" height="14" rx="7" fill="#f5a542" />
      <text x="327" y="49" textAnchor="middle" fill="#000" fontSize="7" fontWeight="bold" fontFamily="sans-serif">+ Add Note</text>
      <rect x="362" y="39" width="46" height="14" rx="7" fill="#1e1208" stroke="#3a2010" />
      <text x="385" y="49" textAnchor="middle" fill="#5a3a18" fontSize="7" fontFamily="sans-serif">Jatin ▾</text>
      {[
        { x: 118, y: 70, title: '📘 DSA Notes', tag: 'Study', tagC: '#42c8f5', body: 'Binary search, DP patterns,\ngraph traversal BFS/DFS...', time: '2h ago' },
        { x: 238, y: 70, title: '🚀 Project Ideas', tag: 'Dev', tagC: '#b8f542', body: 'AI content generator,\nReal-time collab editor...', time: '1d ago' },
        { x: 358, y: 70, title: '🎯 Goals 2026', tag: 'Personal', tagC: '#f5a542', body: 'Internship at top tech,\n150+ LeetCode, OSS contrib', time: '3d ago' },
        { x: 118, y: 168, title: '🌐 Web Resources', tag: 'Links', tagC: '#ff6584', body: 'MDN docs, React patterns,\nNode.js best practices...', time: '5d ago' },
        { x: 238, y: 168, title: '📊 Mandi Research', tag: 'KisanApp', tagC: '#b8f542', body: 'API docs for AGMARKNET,\ncrop price data sources...', time: '1w ago' },
        { x: 358, y: 168, title: '☁️ Cloud Notes', tag: 'NPTEL', tagC: '#42c8f5', body: 'IaaS, PaaS, SaaS\nAWS EC2 vs Lambda...', time: '2w ago' },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={n.y} width="112" height="90" rx="6" fill="#150e06" stroke="#2a1a0820" />
          <rect x={n.x} y={n.y} width="112" height="3" rx="3" fill={n.tagC + '60'} />
          <text x={n.x+8} y={n.y+18} fill="#d0a060" fontSize="8" fontWeight="bold" fontFamily="sans-serif">{n.title}</text>
          <rect x={n.x+8} y={n.y+23} width={n.tag.length*5+10} height="10" rx="5" fill={n.tagC + '20'} />
          <text x={n.x+13} y={n.y+31} fill={n.tagC} fontSize="6.5" fontFamily="sans-serif">{n.tag}</text>
          <text x={n.x+8} y={n.y+48} fill="#5a3a18" fontSize="7" fontFamily="sans-serif">{n.body.split('\n')[0]}</text>
          <text x={n.x+8} y={n.y+59} fill="#5a3a18" fontSize="7" fontFamily="sans-serif">{n.body.split('\n')[1]}</text>
          <line x1={n.x+8} y1={n.y+70} x2={n.x+104} y2={n.y+70} stroke="#2a1a08" />
          <text x={n.x+8} y={n.y+82} fill="#3a2010" fontSize="6.5" fontFamily="sans-serif">{n.time}</text>
        </g>
      ))}
    </svg>
  )
}

function Mockup({ type }) {
  if (type === 'kisan') return <KisanMockup />
  if (type === 'sketch') return <SketchMockup />
  return <BrainMockup />
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" style={{ padding: '8rem 4rem', background: 'var(--surface)', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel text="Projects" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>
            Selected<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--muted2)' }}>work</span>
          </h2>
          <a href="https://github.com/jatin-senpai" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--muted2)', borderBottom: '1px solid var(--border)',
            paddingBottom: 2, transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--muted2)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
          >View all on GitHub →</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              hovered={hovered === i}
              expanded={expanded === i}
              onHover={() => setHovered(i)}
              onLeave={() => setHovered(null)}
              onToggle={() => setExpanded(expanded === i ? null : i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .mockup-panel { transition: max-height 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease; overflow: hidden; }
      `}</style>
    </section>
  )
}

function ProjectCard({ project: p, hovered, expanded, onHover, onLeave, onToggle }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('in-view') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal-block"
      style={{
        background: hovered || expanded ? 'var(--surface2)' : 'var(--bg)',
        border: `1px solid ${hovered || expanded ? p.accent + '35' : 'var(--border)'}`,
        borderRadius: 12,
        transition: 'background 0.3s, border-color 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', left: 0, top: 0, right: 0, height: 2,
        background: p.accent,
        transform: hovered || expanded ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s ease',
      }} />

      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '2rem', alignItems: 'start', padding: '2.5rem' }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em', paddingTop: 4 }}>{p.number}</div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{p.title}</h3>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: `${p.accent}18`, color: p.accent,
              border: `1px solid ${p.accent}30`,
              padding: '0.25rem 0.75rem', borderRadius: '100px',
            }}>{p.highlight}</span>
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--muted2)', marginBottom: '1rem', fontSize: '1.05rem' }}>{p.subtitle}</div>
          <p style={{ color: 'var(--muted2)', lineHeight: 1.7, fontSize: '0.9rem', maxWidth: 640, marginBottom: '1.5rem' }}>{p.description}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {p.tags.map(t => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                letterSpacing: '0.08em', color: 'var(--muted2)',
                background: 'var(--surface)', border: '1px solid var(--border)',
                padding: '0.3rem 0.7rem', borderRadius: 4,
              }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: 130, alignItems: 'flex-end' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{p.period}</div>
          <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--muted2)', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted2)'}
          ><GithubIcon /> Source</a>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: p.accent, transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            ><LiveIcon /> Live</a>
          )}
          <button onClick={onToggle} style={{
            marginTop: '0.25rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: expanded ? p.accent : 'var(--muted)',
            background: expanded ? `${p.accent}12` : 'transparent',
            border: `1px solid ${expanded ? p.accent + '40' : 'var(--border)'}`,
            padding: '0.4rem 0.9rem', borderRadius: 6,
            cursor: 'pointer', transition: 'all 0.2s',
          }}>
            <span style={{ display: 'inline-block', transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'none' }}>▼</span>
            {expanded ? 'Hide' : 'Preview'}
          </button>
        </div>
      </div>

      <div className="mockup-panel" style={{ maxHeight: expanded ? '340px' : '0px', opacity: expanded ? 1 : 0 }}>
        <div style={{
          margin: '0 2.5rem 2.5rem',
          borderRadius: 10, overflow: 'hidden',
          border: `1px solid ${p.accent}25`,
          boxShadow: `0 0 50px ${p.accent}12`,
        }}>
          <Mockup type={p.mockup} />
        </div>
      </div>
    </div>
  )
}

function GithubIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}
function LiveIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8" strokeOpacity="0.4"/></svg>
}
