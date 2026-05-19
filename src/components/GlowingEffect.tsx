import { useCallback, useEffect, useRef, type CSSProperties } from 'react'

type Props = {
  blur?: number
  inactiveZone?: number
  proximity?: number
  spread?: number
  variant?: 'default' | 'white'
  glow?: boolean
  className?: string
  disabled?: boolean
  borderWidth?: number
}

const GRADIENT_DEFAULT =
  'radial-gradient(circle, #FFFFFF 10%, #FFFFFF00 20%),' +
  ' radial-gradient(circle at 40% 40%, #BFBFBF 5%, #BFBFBF00 15%),' +
  ' radial-gradient(circle at 60% 60%, #A3A3A3 10%, #A3A3A300 20%),' +
  ' radial-gradient(circle at 40% 60%, #FFFFFF 10%, #FFFFFF00 20%),' +
  ' repeating-conic-gradient(from 236.84deg at 50% 50%, #FFFFFF 0%, #BFBFBF calc(25% / var(--repeating-conic-gradient-times)), #A3A3A3 calc(50% / var(--repeating-conic-gradient-times)), #BFBFBF calc(75% / var(--repeating-conic-gradient-times)), #FFFFFF calc(100% / var(--repeating-conic-gradient-times)))'

const GRADIENT_WHITE =
  'repeating-conic-gradient(from 236.84deg at 50% 50%, #FFFFFF, #FFFFFF calc(25% / var(--repeating-conic-gradient-times)))'

const MASK_IMAGE =
  'linear-gradient(#0000, #0000), conic-gradient(from calc((var(--start) - var(--spread)) * 1deg), #00000000 0deg, #fff, #00000000 calc(var(--spread) * 2deg))'

export function GlowingEffect({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = 'default',
  glow = false,
  className = '',
  disabled = false,
  borderWidth = 1,
}: Props) {
  const elRef = useRef<HTMLDivElement>(null)
  const lastPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  const handleMove = useCallback(
    (e?: PointerEvent) => {
      if (!elRef.current) return
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const el = elRef.current
        if (!el) return
        const { left, top, width, height } = el.getBoundingClientRect()
        const mx = e?.clientX ?? lastPos.current.x
        const my = e?.clientY ?? lastPos.current.y
        if (e) lastPos.current = { x: mx, y: my }

        const cx = left + width / 2
        const cy = top + height / 2
        const dist = Math.hypot(mx - cx, my - cy)
        const inactive = 0.5 * Math.min(width, height) * inactiveZone

        if (dist < inactive) {
          el.style.setProperty('--active', '0')
          return
        }

        const inProx =
          mx > left - proximity &&
          mx < left + width + proximity &&
          my > top - proximity &&
          my < top + height + proximity

        el.style.setProperty('--active', inProx ? '1' : '0')
        if (!inProx) return

        const cur = parseFloat(el.style.getPropertyValue('--start')) || 0
        const target =
          (180 * Math.atan2(my - cy, mx - cx)) / Math.PI + 90
        let diff = ((target - cur + 180) % 360) - 180
        if (diff < -180) diff += 360
        const next = cur + diff
        el.style.setProperty('--start', String(next))
      })
    },
    [inactiveZone, proximity],
  )

  useEffect(() => {
    if (disabled) return
    const onMove = (e: PointerEvent) => handleMove(e)
    const onScroll = () => handleMove()
    document.body.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.body.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [handleMove, disabled])

  const gradient = variant === 'white' ? GRADIENT_WHITE : GRADIENT_DEFAULT

  const wrapperStyle = {
    '--blur': `${blur}px`,
    '--spread': spread,
    '--start': '0',
    '--active': '0',
    '--glowingeffect-border-width': `${borderWidth}px`,
    '--repeating-conic-gradient-times': '5',
    '--gradient': gradient,
    filter: blur > 0 ? `blur(${blur}px)` : undefined,
  } as CSSProperties

  const glowStyle: CSSProperties = {
    position: 'absolute',
    inset: 'calc(-1 * var(--glowingeffect-border-width))',
    borderRadius: 'inherit',
    border: 'var(--glowingeffect-border-width) solid transparent',
    background: 'var(--gradient)',
    backgroundAttachment: 'fixed',
    opacity: 'var(--active)' as unknown as number,
    transition: 'opacity 300ms ease',
    maskImage: MASK_IMAGE,
    WebkitMaskImage: MASK_IMAGE,
    maskClip: 'padding-box, border-box',
    WebkitMaskClip: 'padding-box, border-box',
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
  }

  return (
    <>
      <div
        className={`pointer-events-none absolute -inset-px rounded-[inherit] border ${
          glow ? 'opacity-100' : 'opacity-0'
        } ${variant === 'white' ? 'border-white' : 'border-transparent'} transition-opacity ${className}`}
      />
      <div
        ref={elRef}
        style={wrapperStyle}
        className={`pointer-events-none absolute inset-0 rounded-[inherit] ${
          disabled ? 'hidden' : ''
        } ${className}`}
      >
        <div style={glowStyle} aria-hidden />
      </div>
    </>
  )
}
