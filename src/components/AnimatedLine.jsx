import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*
  AnimatedLine — divisor de seção que "se desenha" da esquerda para a direita.

  Como funciona:
  - useRef + useInView detecta quando o elemento entra no viewport
  - A div interna começa com scaleX: 0 e vai para scaleX: 1
  - transformOrigin: '0%' faz a animação crescer da esquerda
  - overflow: hidden no pai esconde a parte ainda não desenhada
  - ease [0.16, 1, 0.3, 1] é uma curva "ease-out expo" — rápida no início,
    desacelera elegantemente no final (muito melhor que ease-in-out padrão)
  - once: true → anima só uma vez; margin: '-5%' → dispara um pouco antes
    de entrar completamente na tela
*/
export default function AnimatedLine({ delay = 0, color = 'var(--line)' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        style={{
          height: 1,
          background: color,
          transformOrigin: '0%',
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      />
    </div>
  )
}
