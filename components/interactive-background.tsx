"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Componente InteractiveBackground - Fundo interativo com animação
 * Cria partículas animadas que reagem ao movimento do mouse
 * Implementa animação suave e responsiva
 */
export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const [isClient, setIsClient] = useState(false)

  // Classe para representar uma partícula
  class Particle {
    x: number
    y: number
    baseX: number
    baseY: number
    vx: number
    vy: number
    size: number
    opacity: number
    color: string

    constructor(x: number, y: number) {
      this.x = x
      this.y = y
      this.baseX = x
      this.baseY = y
      this.vx = (Math.random() - 0.5) * 0.5
      this.vy = (Math.random() - 0.5) * 0.5
      this.size = Math.random() * 3 + 1
      this.opacity = Math.random() * 0.5 + 0.2
      this.color = `hsl(221, 83%, ${50 + Math.random() * 20}%)`
    }

    // Atualiza a posição da partícula
    update(mouseX: number, mouseY: number, canvas: HTMLCanvasElement) {
      // Movimento base da partícula
      this.baseX += this.vx
      this.baseY += this.vy

      // Reação ao mouse
      const dx = mouseX - this.baseX
      const dy = mouseY - this.baseY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 100

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance
        const angle = Math.atan2(dy, dx)
        this.x = this.baseX - Math.cos(angle) * force * 20
        this.y = this.baseY - Math.sin(angle) * force * 20
        this.opacity = Math.min(0.8, this.opacity + force * 0.3)
      } else {
        // Retorna suavemente à posição base
        this.x += (this.baseX - this.x) * 0.05
        this.y += (this.baseY - this.y) * 0.05
        this.opacity = Math.max(0.2, this.opacity - 0.01)
      }

      // Mantém as partículas dentro da tela
      if (this.baseX < 0 || this.baseX > canvas.width) this.vx *= -1
      if (this.baseY < 0 || this.baseY > canvas.height) this.vy *= -1

      this.baseX = Math.max(0, Math.min(canvas.width, this.baseX))
      this.baseY = Math.max(0, Math.min(canvas.height, this.baseY))
    }

    // Desenha a partícula
    draw(ctx: CanvasRenderingContext2D) {
      ctx.save()
      ctx.globalAlpha = this.opacity
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  // Inicializa as partículas
  const initParticles = (canvas: HTMLCanvasElement) => {
    const particles: Particle[] = []
    const particleCount = Math.floor((canvas.width * canvas.height) / 8000)

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height))
    }

    return particles
  }

  // Conecta partículas próximas com linhas
  const drawConnections = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 80) {
          ctx.save()
          ctx.globalAlpha = ((80 - distance) / 80) * 0.2
          ctx.strokeStyle = "hsl(221, 83%, 60%)"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
          ctx.restore()
        }
      }
    }
  }

  // Loop de animação
  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Atualiza e desenha partículas
    particlesRef.current.forEach((particle) => {
      particle.update(mouseRef.current.x, mouseRef.current.y, canvas)
      particle.draw(ctx)
    })

    // Desenha conexões entre partículas
    drawConnections(ctx, particlesRef.current)

    animationRef.current = requestAnimationFrame(animate)
  }

  // Redimensiona o canvas
  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    // Reinicializa partículas após redimensionar
    particlesRef.current = initParticles(canvas)
  }

  // Manipula movimento do mouse
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    // Configuração inicial
    resizeCanvas()
    particlesRef.current = initParticles(canvas)

    // Event listeners
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)

    // Inicia animação
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isClient])

  if (!isClient) {
    return <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--background)) 50%, hsl(var(--secondary) / 0.05) 100%)",
      }}
      aria-hidden="true"
    />
  )
}
