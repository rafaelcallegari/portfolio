import { motion } from 'framer-motion'
import AnimatedLine from './AnimatedLine'
import { containerVariants, itemVariants } from '../lib/motion'
import { ArrowIcon } from './Icons'

function FreelanceCard({ href, title, description, tags }) {
  return (
    <motion.a
      className="card"
      href={href}
      target="_blank"
      rel="noopener"
      whileHover={{ y: -4, boxShadow: '0 16px 32px -16px rgba(0,0,0,0.3)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className="top">
        <h3>{title}</h3>
        <span className="arrow"><ArrowIcon /></span>
      </div>
      <p>{description}</p>
      <div className="tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
    </motion.a>
  )
}

export default function Freelance() {
  return (
    <section id="freelas">
      <AnimatedLine />

      <motion.div
        className="wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        style={{ paddingTop: 64 }}
      >
        <motion.p className="eyebrow" variants={itemVariants}>// trabalhos entregues</motion.p>
        <motion.h2 className="sec-title" variants={itemVariants}>Freelas &amp; projetos</motion.h2>

        <motion.div className="grid" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <FreelanceCard
              href="https://cintel-site.vercel.app"
              title="Cintel Inteligência"
              description="Desenvolvimento completo de um site para um cliente do setor imobiliário — da construção da interface ao go-live em produção. Integrei pagamentos via Stripe, e-mails transacionais com domínio customizado pela Resend e mapas de geomarketing servidos pelo Cloudflare R2 (mais de 180 mil arquivos). Cuidei também de todo o deploy: configuração de DNS no GoDaddy, apontamento para a Vercel e setup das variáveis de ambiente em produção."
              tags={['web', 'stripe', 'resend', 'cloudflare-r2', 'vercel', 'godaddy']}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
