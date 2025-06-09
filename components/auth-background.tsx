"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Componente AuthBackground - Fundo interativo para páginas de autenticação
 * Cria uma animação de ondas fluidas que reagem ao movimento do mouse
 * Variação do InteractiveBackground com tema mais suave
 */
export function AuthBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const wavesRef = useRef<Wave[]>([])
    const animationRef = useRef<number>()
    const [isClient, setIsClient] = useState(false)

    // Classe para representar uma onda
    class Wave {
        x: number
        y: number
        radius: number
        speed: number
        angle: number
        opacity: number
        color: string
        direction: number

        constructor(x: number, y: number) {
            this.x = x
            this.y = y
            this.radius = Math.random() * 150 + 50
            this.speed = Math.random() * 0.02 + 0.01
            this.angle = Math.random() * Math.PI * 2
            this.opacity = Math.random() * 0.3 + 0.1
            this.color = `hsl(221, 83%, ${60 + Math.random() * 20}%)`
            this.direction = Math.random() > 0.5 ? 1 : -1
        }

        // Atualiza a onda
        update(mouseX: number, mouseY: number, canvas: HTMLCanvasElement) {
            // Movimento base da onda
            this.angle += this.speed * this.direction
            this.x += Math.cos(this.angle) * 0.5
            this.y += Math.sin(this.angle) * 0.3

            // Reação suave ao mouse
            const dx = mouseX - this.x
            const dy = mouseY - this.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 200

            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance
                const angle = Math.atan2(dy, dx)
                this.x -= Math.cos(angle) * force * 10
                this.y -= Math.sin(angle) * force * 10
                this.opacity = Math.min(0.6, this.opacity + force * 0.2)
                this.radius = Math.min(200, this.radius + force * 20)
            } else {
                // Retorna suavemente ao estado normal
                this.opacity = Math.max(0.1, this.opacity - 0.005)
                this.radius = Math.max(50, this.radius - 0.5)
            }

            // Mantém as ondas dentro da tela
            if (this.x < -100 || this.x > canvas.width + 100) this.direction *= -1
            if (this.y < -100 || this.y > canvas.height + 100) this.direction *= -1

            this.x = Math.max(-100, Math.min(canvas.width + 100, this.x))
            this.y = Math.max(-100, Math.min(canvas.height + 100, this.y))
        }

        // Desenha a onda
        draw(ctx: CanvasRenderingContext2D) {
            ctx.save()
            ctx.globalAlpha = this.opacity

            // Gradiente radial para efeito de onda
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
            gradient.addColorStop(0, this.color)
            gradient.addColorStop(1, "transparent")

            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
        }
    }

    // Função para obter cores do CSS
    const getComputedColors = () => {
        if (typeof window === "undefined") {
            return {
                background: "#0a0a0a",
                primary: "#3b82f6",
            }
        }

        const root = document.documentElement
        const computedStyle = getComputedStyle(root)

        // Obter valores das variáveis CSS e converter para cores válidas
        const backgroundHsl = computedStyle.getPropertyValue("--background").trim()
        const primaryHsl = computedStyle.getPropertyValue("--primary").trim()

        // Converter HSL para formato válido do canvas
        const background = backgroundHsl ? `hsl(${backgroundHsl})` : "#0a0a0a"
        const primary = primaryHsl ? `hsl(${primaryHsl})` : "#3b82f6"

        return { background, primary }
    }

    // Inicializa as ondas
    const initWaves = (canvas: HTMLCanvasElement) => {
        const waves: Wave[] = []
        const waveCount = Math.floor((canvas.width * canvas.height) / 50000)

        for (let i = 0; i < waveCount; i++) {
            waves.push(new Wave(Math.random() * canvas.width, Math.random() * canvas.height))
        }

        return waves
    }

    // Loop de animação
    const animate = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const colors = getComputedColors()

        // Limpa o canvas com um gradiente suave usando cores válidas
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, colors.background)
        gradient.addColorStop(0.5, "hsl(221, 83%, 4%)")
        gradient.addColorStop(1, colors.background)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Atualiza e desenha ondas
        wavesRef.current.forEach((wave) => {
            wave.update(mouseRef.current.x, mouseRef.current.y, canvas)
            wave.draw(ctx)
        })

        animationRef.current = requestAnimationFrame(animate)
    }

    // Redimensiona o canvas
    const resizeCanvas = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height

        // Reinicializa ondas após redimensionar
        wavesRef.current = initWaves(canvas)
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
        wavesRef.current = initWaves(canvas)

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

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
