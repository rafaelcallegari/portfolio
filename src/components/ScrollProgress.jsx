import { motion, useScroll, useSpring } from 'framer-motion'

/*
  ScrollProgress — barra fina no TOPO da página.

  Como funciona:
  - useScroll() do Framer Motion rastreia scrollYProgress (0 = topo, 1 = fim)
  - useSpring() suaviza o valor com física de mola (stiffness/damping)
    → sem spring ficaria "nervoso", travando a cada micro-scroll
  - A div tem scaleX = scrollYProgress, transformOrigin '0%' (cresce da esquerda)
  - position: fixed + zIndex 100 garante que fica acima de tudo
*/
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'var(--accent)',
        scaleX,
        transformOrigin: '0%',
        zIndex: 100,
      }}
    />
  )
}
