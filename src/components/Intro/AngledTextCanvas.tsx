import { useEffect, useRef } from 'react'

interface TextRow {
  angle: number
  y: number
  fontSize: number
  color: string
  opacity: number
  delay: number
  fromRight: boolean
  speed: number
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function generateRows(w: number, h: number): TextRow[] {
  const rows: TextRow[] = []
  const isMobile = w < 600
  const count = isMobile ? 16 : 22
  const spacing = (h * 1.6) / count
  const fontScale = isMobile ? 0.6 : 1

  for (let i = 0; i < count; i++) {
    const wave = i < Math.floor(count * 0.32) ? 0 : i < Math.floor(count * 0.64) ? 1 : 2
    const angleRange = wave === 0 ? [-55, -30] : wave === 1 ? [25, 50] : [-20, 20]
    const angle = angleRange[0] + Math.random() * (angleRange[1] - angleRange[0])
    const fontSize = (wave === 2 ? 14 + Math.random() * 20 : 20 + Math.random() * 28) * fontScale
    const baseOpacity = wave === 2 ? 0.06 + Math.random() * 0.15 : 0.08 + Math.random() * 0.5

    rows.push({
      angle,
      y: -h * 0.3 + i * spacing,
      fontSize,
      color: Math.random() > 0.3 ? '#ffffff' : '#000000',
      opacity: baseOpacity,
      delay: wave * 0.3 + (i % 7) * 0.06,
      fromRight: wave === 1,
      speed: 0.8 + Math.random() * 0.4,
    })
  }
  return rows
}

interface AngledTextCanvasProps {
  active: boolean
}

export default function AngledTextCanvas({ active }: AngledTextCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let startTime: number | null = null
    let rows: TextRow[] = []
    const dpr = window.devicePixelRatio || 1

    function resize() {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = w + 'px'
      canvas!.style.height = h + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      rows = generateRows(w, h)
    }

    resize()
    window.addEventListener('resize', resize)

    const text = 'ONE PRODUCTION   '.repeat(30)

    function drawRow(row: TextRow, elapsed: number, w: number) {
      const rowElapsed = Math.max(0, elapsed - row.delay)
      const sweepProgress = Math.min(1, rowElapsed / row.speed)
      const eased = easeOutCubic(sweepProgress)

      if (eased <= 0) return

      // Fade out the whole canvas starting at 2.5s
      let fadeMultiplier = 1
      if (elapsed > 2.5) {
        fadeMultiplier = Math.max(0, 1 - (elapsed - 2.5) / 0.5)
      }

      ctx!.save()
      ctx!.translate(w / 2, row.y)
      ctx!.rotate((row.angle * Math.PI) / 180)
      ctx!.font = `900 ${row.fontSize}px 'Playfair Display', serif`
      ctx!.fillStyle = row.color
      ctx!.globalAlpha = row.opacity * eased * fadeMultiplier

      const slideDistance = w * 1.5
      const direction = row.fromRight ? 1 : -1
      const currentX = direction * slideDistance * (1 - eased)
      ctx!.fillText(text, currentX - w * 3, 0)

      ctx!.restore()
    }

    function animate(timestamp: number) {
      if (!active) return
      if (startTime === null) startTime = timestamp
      const elapsed = (timestamp - startTime) / 1000

      const w = window.innerWidth

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      // Stop rendering after full fade
      if (elapsed > 3) {
        return
      }

      rows.forEach((row) => drawRow(row, elapsed, w))

      // Subtle drift after initial sweep
      if (elapsed > 1.5) {
        rows.forEach((r) => {
          r.y += (r.fromRight ? 0.15 : -0.15)
        })
      }

      animId = requestAnimationFrame(animate)
    }

    document.fonts.ready.then(() => {
      animId = requestAnimationFrame(animate)
    })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    />
  )
}
