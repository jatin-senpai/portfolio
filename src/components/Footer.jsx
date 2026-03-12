export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem 4rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'var(--surface)',
    }}>
      <div style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--accent)' }}>JY.</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase' }}>
        Jatin Yadav · 2025
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
        Built with React + Vite
      </div>
    </footer>
  )
}
