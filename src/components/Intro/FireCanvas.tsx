import { useEffect, useRef } from 'react'

interface SparkData {
  x: number
  y: number
  vx: number
  vy: number
  gravity: number
  life: number
  decay: number
  size: number
  color: string
  flicker: number
}

function createSpark(x: number, y: number, burst: boolean): SparkData {
  const colors = ['#ff6a00', '#ff9500', '#ffcc00', '#ff4500', '#ffdd44', '#ff8800']
  return {
    x,
    y,
    vx: (Math.random() - 0.5) * (burst ? 8 : 2.5),
    vy: -(Math.random() * (burst ? 10 : 5) + 1),
    gravity: 0.04 + Math.random() * 0.03,
    life: 1,
    decay: 0.006 + Math.random() * 0.012,
    size: Math.random() * 3.5 + 0.8,
    color: colors[Math.floor(Math.random() * colors.length)],
    flicker: Math.random() * 0.5,
  }
}

interface FireCanvasProps {
  active: boolean
}

export default function FireCanvas({ active }: FireCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: SparkData[] = []
    let frameCount = 0
    let burstDone = false
    let animId: number

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function getEmitters() {
      const cx = canvas!.width / 2
      const cy = canvas!.height / 2
      const gap = Math.min(canvas!.width * 0.25, 220)
      return [
        { x: cx - gap, y: cy + 60 },
        { x: cx + gap, y: cy + 60 },
      ]
    }

    function emitSparks() {
      const em = getEmitters()
      frameCount++
      if (frameCount === 40 && !burstDone) {
        burstDone = true
        em.forEach((e) => {
          for (let i = 0; i < 60; i++) {
            particles.push(createSpark(e.x + (Math.random() - 0.5) * 100, e.y, true))
          }
        })
      }
      em.forEach((e) => {
        if (Math.random() < 0.5) {
          particles.push(
            createSpark(e.x + (Math.random() - 0.5) * 120, e.y + (Math.random() - 0.5) * 20, false)
          )
        }
      })
      if (Math.random() < 0.2) {
        particles.push(
          createSpark(
            Math.random() * canvas!.width,
            canvas!.height * 0.7 + Math.random() * canvas!.height * 0.2,
            false
          )
        )
      }
    }

    function animate() {
      if (!active) return
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      emitSparks()

      particles.forEach((p) => {
        // Update
        p.x += p.vx
        p.vy += p.gravity
        p.y += p.vy
        p.vx *= 0.99
        p.life -= p.decay
        p.size *= 0.998

        // Draw
        if (p.life <= 0) return
        const a = p.life * (0.7 + Math.sin(Date.now() * 0.01 + p.flicker * 100) * 0.3)
        ctx!.save()
        ctx!.globalAlpha = Math.max(0, a)
        ctx!.fillStyle = p.color
        ctx!.shadowColor = p.color
        ctx!.shadowBlur = 10
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.restore()
      })

      particles = particles.filter((p) => p.life > 0 && p.y < canvas!.height + 20)
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

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
