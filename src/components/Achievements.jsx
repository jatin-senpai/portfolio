import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from './About'

const achievements = [
  {
    icon: '🏆',
    title: '1st Rank — Quiz Competition',
    event: 'Magnitude 2023',
    date: 'Nov 2025',
    desc: 'Secured 1st position among 25 teams in a university-level general knowledge and current affairs quiz.',
    accent: '#b8f542',
    hasExpand: false,
  },
  {
    icon: '🎤',
    title: 'Selected Student Speaker',
    event: 'Jaygosh 2025, Bharat Mandapam',
    date: 'Aug 2025',
    desc: 'Selected through two competitive stages from 1,000+ participants to represent student voices on a national platform in New Delhi.',
    accent: '#42c8f5',
    hasExpand: true,
  },
  {
    icon: '💡',
    title: '100+ DSA Problems',
    event: 'LeetCode',
    date: 'Jan 2026',
    desc: 'Consistently solved algorithmic problems across arrays, graphs, DP, and more — strengthening core problem-solving foundations.',
    accent: '#f5a542',
    hasExpand: true,
    isLeetcode: true,
  },
]

/* ── Jayghosha Event Visual ── */
function JayghoshaEventVisual() {
  return (
    <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
      {/* Identity Card replica */}
      <div style={{
        flex: '1 1 200px', maxWidth: 240,
        background: 'linear-gradient(145deg, #f5f0e8, #ede5d0)',
        borderRadius: 12, overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}>
        {/* Top brand bar */}
        <div style={{ background: '#1a1a1a', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#b8f542', fontSize: 9, fontWeight: 700, letterSpacing: '0.05em' }}>Yuva Events</span>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg, #e85d20, #c44010)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 10 }}>🌿</span>
          </div>
          <span style={{ color: '#e0c8a0', fontSize: 9, fontWeight: 700 }}>जयघोष</span>
        </div>
        {/* Card body */}
        <div style={{ padding: '14px 16px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: '#1a1a1a', color: '#e0d0b8',
            fontSize: 7, fontWeight: 700, letterSpacing: '0.2em',
            padding: '3px 12px', borderRadius: 3, marginBottom: 10,
            border: '1px solid #8a7a60',
          }}>IDENTITY CARD</div>

          <div style={{ fontSize: 28, fontWeight: 900, color: '#1a0a04', lineHeight: 1, marginBottom: 4, fontFamily: 'serif' }}>जयघोष</div>
          <div style={{ fontSize: 9, color: '#5a3a1a', marginBottom: 10, fontFamily: 'serif' }}>बगावत से सियासत तक</div>

          <div style={{
            display: 'inline-block',
            border: '1.5px solid #8a7a60', borderRadius: 30,
            padding: '2px 12px', fontSize: 8, color: '#3a2a0a', marginBottom: 6,
          }}>दिन- मंगलवार</div>

          <div style={{ fontSize: 40, fontWeight: 900, color: '#1a0a04', lineHeight: 1 }}>05</div>
          <div style={{ fontSize: 10, color: '#5a3a1a', marginBottom: 10 }}>अगस्त 2025</div>

          <div style={{ fontSize: 8, color: '#3a2a0a', marginBottom: 12, fontWeight: 600 }}>स्थान- भारत मंडपम, नई दिल्ली</div>

          <div style={{
            background: '#1a0a04', color: '#e0c8a0',
            fontSize: 11, fontWeight: 800, letterSpacing: '0.15em',
            padding: '6px 0', borderRadius: 4,
          }}>PARTICIPANT</div>
        </div>
      </div>

      {/* Entry Ticket replica */}
      <div style={{
        flex: '1 1 280px', maxWidth: 340,
        borderRadius: 12, overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        display: 'flex',
      }}>
        {/* Left brown section */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #8b2a00, #6a1a00)',
          padding: '16px 14px',
          position: 'relative',
        }}>
          {/* Stamp edge top */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'repeating-radial-gradient(circle at 6px 0, transparent 0, transparent 5px, #1a0800 5px, #1a0800 6px)' }} />
          {/* Stamp edge bottom */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, background: 'repeating-radial-gradient(circle at 6px 6px, transparent 0, transparent 5px, #1a0800 5px, #1a0800 6px)' }} />

          <div style={{ color: '#f0d0a0', fontSize: 9, fontWeight: 700, marginBottom: 2 }}>जयघोष</div>
          <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 2 }}>ENTRY<br/>TICKET</div>
          <div style={{ color: '#c08060', fontSize: 6.5, marginBottom: 10 }}>BHARAT MANDAPAM, NEW DELHI</div>

          {/* Bharat Mandapam illustration */}
          <div style={{
            background: 'linear-gradient(to bottom, #1a3a5a, #0a1a2a)',
            borderRadius: 6, padding: '6px', marginBottom: 8,
          }}>
            <svg viewBox="0 0 120 50" style={{ width: '100%' }}>
              <ellipse cx="60" cy="20" rx="55" ry="18" fill="#2a4a7a" />
              <ellipse cx="60" cy="18" rx="48" ry="14" fill="#3a5a8a" />
              <rect x="10" y="28" width="100" height="20" fill="#1a2a4a" />
              {/* Lights */}
              {[20,35,50,65,80,95].map(x => (
                <circle key={x} cx={x} cy="20" r="1.5" fill="#f5a542" opacity="0.8" />
              ))}
              <circle cx="60" cy="12" r="4" fill="#f5a542" opacity="0.6" />
              <text x="60" y="42" textAnchor="middle" fill="#4a6a9a" fontSize="5" fontFamily="sans-serif">Bharat Mandapam</text>
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 28, height: 14, background: 'linear-gradient(90deg, #f5a542, #e08020)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 6, fontWeight: 700, color: '#000' }}>Yuva</span>
            </div>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'radial-gradient(#fff, #e0e8e0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 7 }}>🏅</span>
            </div>
          </div>
        </div>

        {/* Right golden stub */}
        <div style={{
          width: 90,
          background: 'linear-gradient(135deg, #f4a825, #e08820)',
          padding: '14px 10px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: -1, width: 2, borderLeft: '2px dashed rgba(0,0,0,0.15)' }} />
          <div style={{ fontSize: 7, fontWeight: 700, color: '#5a3000', marginBottom: 4, letterSpacing: '0.1em' }}>DATE:</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: '#1a0800', lineHeight: 1.1, marginBottom: 6 }}>AUG 5TH,<br/>2025</div>
          <div style={{ fontSize: 6.5, color: '#5a3000', marginBottom: 8 }}>9:00 AM ONWARDS</div>
          <div style={{ borderTop: '1.5px dashed rgba(0,0,0,0.2)', width: '80%', marginBottom: 8 }} />
          <div style={{ fontSize: 11, fontWeight: 900, color: '#1a0800', letterSpacing: '0.05em' }}>ADMIT ONE</div>
        </div>
      </div>

      {/* Event stats */}
      <div style={{
        flex: '1 1 160px', maxWidth: 200,
        display: 'flex', flexDirection: 'column', gap: '0.75rem',
        justifyContent: 'center',
      }}>
        {[
          { num: '1000+', label: 'Participants', icon: '👥' },
          { num: '2', label: 'Selection Rounds', icon: '🎯' },
          { num: '05', label: 'Aug 2025', icon: '📅' },
          { num: 'National', label: 'Platform', icon: '🇮🇳' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface2)', border: '1px solid var(--border)',
            borderRadius: 8, padding: '0.6rem 1rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <span style={{ fontSize: 16 }}>{s.icon}</span>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#42c8f5' }}>{s.num}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── LeetCode Stats Visual ── */
function LeetCodeVisual() {
  const categories = [
    { label: 'Easy', solved: 52, total: 52, color: '#4ade80' },
    { label: 'Medium', solved: 45, total: 45, color: '#f5a542' },
    { label: 'Hard', solved: 12, total: 12, color: '#ff6584' },
  ]
  const topics = ['Arrays', 'Strings', 'Linked Lists', 'Binary Search', 'Trees', 'DP', 'Graphs', 'Hashing', 'Two Pointers', 'Sliding Window']

  return (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {/* Donut + stats */}
      <div style={{
        background: 'var(--surface2)', border: '1px solid var(--border)',
        borderRadius: 12, padding: '1.5rem',
        minWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
      }}>
        {/* Donut chart */}
        <div style={{ position: 'relative', width: 110, height: 110 }}>
          <svg viewBox="0 0 36 36" style={{ width: 110, height: 110, transform: 'rotate(-90deg)' }}>
            <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#1e1e26" strokeWidth="3.5" />
            {/* Easy arc */}
            <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#4ade80" strokeWidth="3.5"
              strokeDasharray="35 65" strokeDashoffset="0" strokeLinecap="round" />
            {/* Medium arc */}
            <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#f5a542" strokeWidth="3.5"
              strokeDasharray="30 70" strokeDashoffset="-35" strokeLinecap="round" />
            {/* Hard arc */}
            <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#ff6584" strokeWidth="3.5"
              strokeDasharray="8 92" strokeDashoffset="-65" strokeLinecap="round" />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, lineHeight: 1 }}>109</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>solved</div>
          </div>
        </div>

        {/* Breakdown */}
        {categories.map((c, i) => (
          <div key={i} style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: '0.75rem', color: c.color, fontWeight: 600 }}>{c.label}</span>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>{c.solved}</span>
            </div>
            <div style={{ height: 3, background: 'var(--border)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: '100%', background: c.color, borderRadius: 2, opacity: 0.8 }} />
            </div>
          </div>
        ))}

        <a href="https://leetcode.com/u/ehOBh7GihG/" target="_blank" rel="noopener noreferrer" style={{
          width: '100%', textAlign: 'center',
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#f5a542', borderBottom: '1px solid #f5a54240',
          paddingBottom: 2, transition: 'opacity 0.2s',
        }}>View Profile →</a>
      </div>

      {/* Topic badges */}
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Topics Covered</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {topics.map((t, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              letterSpacing: '0.06em', color: 'var(--muted2)',
              background: 'var(--surface2)', border: '1px solid var(--border)',
              padding: '0.35rem 0.8rem', borderRadius: 6,
            }}>{t}</span>
          ))}
        </div>

        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Acceptance', value: '68.4%', color: '#4ade80' },
            { label: 'Streak', value: '30d', color: '#f5a542' },
            { label: 'Ranking', value: 'Top 25%', color: '#42c8f5' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'var(--surface2)', border: '1px solid var(--border)',
              borderRadius: 8, padding: '0.75rem 1rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const [expandedIdx, setExpandedIdx] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('in-view') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="achievements" style={{ padding: '8rem 4rem', background: 'var(--surface)', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionLabel text="Achievements" />
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '4rem' }}>
          Recognition &<br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--muted2)' }}>milestones</span>
        </h2>

        <div ref={ref} className="reveal-block" style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', marginBottom: '1px' }}>
          {achievements.map((a, i) => (
            <div key={i}>
              {/* Achievement card */}
              <div
                style={{
                  background: expandedIdx === i ? 'var(--surface2)' : 'var(--bg)',
                  padding: '2.5rem',
                  position: 'relative', overflow: 'hidden',
                  transition: 'background 0.2s',
                  cursor: a.hasExpand ? 'pointer' : 'default',
                }}
                onClick={() => a.hasExpand && setExpandedIdx(expandedIdx === i ? null : i)}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: a.accent, opacity: expandedIdx === i ? 1 : 0.4 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{a.icon}</div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      letterSpacing: '0.12em', color: 'var(--muted)',
                      textTransform: 'uppercase', marginBottom: '0.5rem',
                    }}>{a.date} · {a.event}</div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.75rem' }}>{a.title}</h3>
                    <p style={{ color: 'var(--muted2)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 600 }}>{a.desc}</p>
                  </div>
                  {a.hasExpand && (
                    <button style={{
                      background: expandedIdx === i ? `${a.accent}15` : 'transparent',
                      border: `1px solid ${expandedIdx === i ? a.accent + '40' : 'var(--border)'}`,
                      borderRadius: 6, padding: '0.35rem 0.8rem',
                      fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: expandedIdx === i ? a.accent : 'var(--muted)',
                      cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', gap: '0.35rem',
                    }}>
                      <span style={{ transition: 'transform 0.3s', display: 'inline-block', transform: expandedIdx === i ? 'rotate(180deg)' : 'none' }}>▼</span>
                      {expandedIdx === i ? 'Hide' : 'View'}
                    </button>
                  )}
                </div>
              </div>

              {/* Expanded panel */}
              {a.hasExpand && (
                <div style={{
                  maxHeight: expandedIdx === i ? '600px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.55s cubic-bezier(0.16,1,0.3,1)',
                  background: 'var(--bg)',
                  borderTop: expandedIdx === i ? `1px solid var(--border)` : 'none',
                }}>
                  <div style={{ padding: '2rem 2.5rem 2.5rem' }}>
                    {a.isLeetcode ? <LeetCodeVisual /> : <JayghoshaEventVisual />}
                  </div>
                </div>
              )}
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
