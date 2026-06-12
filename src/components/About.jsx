import { motion } from 'framer-motion'
import AnimatedLine from './AnimatedLine'
import { containerVariants, itemVariants } from '../lib/motion'

/*
  About — seção "Quem sou" + stack de tecnologias.

  Animações:
  - AnimatedLine no topo: substitui o border-top estático, desenhando
    a linha horizontalmente quando a seção entra no viewport
  - motion.div com whileInView + variants containerVariants faz o stagger:
    cada filho que tem variants={itemVariants} entra com 90ms de delay entre si
  - viewport={{ once: true }} → anima só na primeira vez
  - Os chips da stack usam o mesmo sistema de stagger, então entram
    em onda da esquerda para a direita
*/

const stack = [
  'Python', 'Machine Learning', 'Inteligência Artificial', 'Análise de Dados',
  'Automação', 'JavaScript', 'AWS', 'Linux', 'Stripe', 'Cloudflare', 'Vercel', 'Git',
]

export default function About() {
  return (
    <section id="sobre">
      <AnimatedLine />

      <motion.div
        className="wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        style={{ paddingTop: 64 }}
      >
        <motion.p className="eyebrow" variants={itemVariants}>// sobre</motion.p>
        <motion.h2 className="sec-title" variants={itemVariants}>Quem sou</motion.h2>

        <motion.p className="lead" variants={itemVariants}>
          Tenho 22 anos, sou de São Paulo e atuo na interseção entre desenvolvimento,
          automação e inteligência artificial. Hoje sou estagiário no{' '}
          <a href="#experiencia">Itaú Unibanco</a>, onde construo automações e projetos de
          IA aplicada ao ambiente corporativo, além de análise de dados.
        </motion.p>

        <motion.p className="lead" variants={itemVariants}>
          Estou cursando pós-graduação em Machine Learning na FIAP e já entreguei projetos
          web completos do design ao go-live em produção. Gosto de transformar processos
          manuais em soluções que funcionam de verdade.
        </motion.p>

        <motion.p className="eyebrow" variants={itemVariants} style={{ marginTop: 8 }}>
          // stack &amp; ferramentas
        </motion.p>

        <motion.div className="stack" variants={containerVariants}>
          {stack.map((s) => (
            <motion.span key={s} className="chip" variants={itemVariants}>
              {s}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
