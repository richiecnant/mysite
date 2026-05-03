import { useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]|;:<>?/~`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId
    let columns = []
    let w, h, colCount

    const FONT_SIZE = 16
    const SPEED_MIN = 0.3
    const SPEED_MAX = 1.2

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const newColCount = Math.ceil(w / FONT_SIZE)

      if (newColCount !== colCount) {
        colCount = newColCount
        columns = Array.from({ length: colCount }, () => ({
          y: Math.random() * h,
          speed: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
          chars: Array.from({ length: Math.ceil(h / FONT_SIZE) + 5 }, () =>
            CHARS[Math.floor(Math.random() * CHARS.length)]
          ),
          offset: Math.floor(Math.random() * 20),
        }))
      }
    }

    function draw() {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.12)'
      ctx.fillRect(0, 0, w, h)

      ctx.font = `${FONT_SIZE}px "Courier New", monospace`

      for (let i = 0; i < colCount; i++) {
        const col = columns[i]
        const x = i * FONT_SIZE

        for (let j = 0; j < col.chars.length; j++) {
          const charY = col.y - (j - col.offset) * FONT_SIZE
          if (charY < -FONT_SIZE || charY > h + FONT_SIZE) continue

          const distFromHead = j - col.offset
          let alpha
          if (distFromHead <= 0) {
            alpha = 0
          } else if (distFromHead === 1) {
            alpha = 1
          } else if (distFromHead < 5) {
            alpha = 1 - (distFromHead - 1) * 0.15
          } else {
            alpha = Math.max(0.05, 0.5 - distFromHead * 0.015)
          }

          if (alpha <= 0) continue

          if (distFromHead === 1) {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
          } else if (distFromHead < 4) {
            ctx.fillStyle = `rgba(180, 255, 180, ${alpha})`
          } else {
            ctx.fillStyle = `rgba(0, 200, 80, ${alpha * 0.7})`
          }

          ctx.fillText(col.chars[j], x, charY)

          if (Math.random() < 0.002) {
            col.chars[j] = CHARS[Math.floor(Math.random() * CHARS.length)]
          }
        }

        col.y += col.speed
        if (col.y > h + FONT_SIZE * col.chars.length) {
          col.y = -FONT_SIZE * 10
          col.speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN)
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.35 }}
    />
  )
}
