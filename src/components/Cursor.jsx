import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      if (ringRef.current) { ringRef.current.style.width = '56px'; ringRef.current.style.height = '56px'; ringRef.current.style.borderColor = 'rgba(184,245,66,0.6)' }
      if (dotRef.current) { dotRef.current.style.transform += ' scale(2)' }
    }
    const onLeaveLink = () => {
      if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; ringRef.current.style.borderColor = 'rgba(184,245,66,0.25)' }
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        width: 10, height: 10,
        background: 'var(--accent)',
        borderRadius: '50%',
        position: 'fixed', top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        willChange: 'transform',
      }} />
      <div ref={ringRef} style={{
        width: 36, height: 36,
        border: '1px solid rgba(184,245,66,0.25)',
        borderRadius: '50%',
        position: 'fixed', top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'width 0.2s, height 0.2s, border-color 0.2s',
        willChange: 'transform',
      }} />
    </>
  )
}
