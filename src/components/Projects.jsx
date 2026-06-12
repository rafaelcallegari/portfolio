import { motion } from 'framer-motion'
import AnimatedLine from './AnimatedLine'
import { containerVariants, itemVariants } from '../lib/motion'

/*
  Projects — projetos em andamento.

  Card com Framer Motion:
  - whileHover com y: -4 e boxShadow cria o efeito de "levantar" o card
  - transition type: 'spring' com stiffness/damping define a "personalidade"
    da mola — stiffness alto = mola firme, damping alto = menos oscilação
  - Isso é muito mais natural que um transition: transform 0.2s em CSS,
    porque segue física real em vez de uma curva arbitrária
*/

function ProjectCard({ title, badge, description, tags }) {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -4, boxShadow: '0 16px 32px -16px rgba(0,0,0,0.3)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="top">
        <h3>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projetos">
      <AnimatedLine />

      <motion.div
        className="wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        style={{ paddingTop: 64 }}
      >
        <motion.p className="eyebrow" variants={itemVariants}>// no que estou trabalhando</motion.p>
        <motion.h2 className="sec-title" variants={itemVariants}>Projetos atuais</motion.h2>

        <motion.div className="grid" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <ProjectCard
              title="O.R.A.C.U.L.O."
              badge="em progresso"
              description="Plataforma web para Mestres de RPG organizarem campanhas com o apoio de IA. Oferece gerador de NPCs, códice de campanha com Markdown, linha do tempo de sessões e um assistente que conhece o universo da sua campanha — criada para ser acessível numa área onde as ferramentas existentes cobram caro e entregam pouco."
              tags={['ia', 'rpg', 'web', 'react', 'python']}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
