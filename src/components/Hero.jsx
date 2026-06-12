import { motion } from 'framer-motion'
import { EmailIcon, GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

/*
  HeroLines — linhas decorativas animadas no fundo do hero.

  Como funciona:
  - São divs absolutamente posicionadas com background em gradiente
    (transparente → accent → transparente), criando linhas "difusas"
  - Cada uma começa com scaleX: 0 e anima para scaleX: 1 com delays escalonados
  - transformOrigin: '0%' faz crescer da esquerda
  - opacity baixa (0.10–0.14) as torna sutis — presença sem barulho
  - Em dark mode ficam mais visíveis graças ao --accent mais claro
*/
function HeroLines() {
  const lines = [
    { top: '18%', width: '55%', left: '5%',  delay: 0.2,  opacity: 0.10 },
    { top: '42%', width: '38%', left: '0%',  delay: 0.55, opacity: 0.08 },
    { top: '68%', width: '65%', left: '12%', delay: 0.9,  opacity: 0.07 },
  ]

  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {lines.map((l, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: l.top,
            left: l.left,
            width: l.width,
            height: 1,
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            opacity: l.opacity,
            transformOrigin: '0%',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: l.delay, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  )
}

/*
  Hero — seção principal.

  Animações (stagger manual):
  - Cada elemento recebe um delay crescente (0.3, 0.45, 0.6, 0.75)
  - Todos partem de opacity: 0, y: 20 e chegam em opacity: 1, y: 0
  - Isso cria o efeito "cascata de entrada" sem precisar de variants complexos
  - O status e o h1 entram primeiro, depois tagline, por último os botões
*/
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <HeroLines />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="status" {...fadeUp(0.3)}>
          <span className="pulse" />
          · São Paulo, BR
        </motion.div>

        <motion.h1 {...fadeUp(0.45)}>
          Rafael Callegari,<br />
          <span className="accent">desenvolvedor.</span>
        </motion.h1>

        <motion.p className="tagline" {...fadeUp(0.6)}>
          Crio automações, soluções com inteligência artificial e aplicações web —
          do dado bruto ao deploy em produção.
        </motion.p>

        <motion.div className="socials" {...fadeUp(0.75)}>
          <a className="btn primary" href="mailto:rafaelcallegarid@gmail.com">
            <EmailIcon /> E-mail
          </a>
          <a className="btn" href="https://github.com/rafaelcallegari" target="_blank" rel="noopener">
            <GithubIcon /> GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/in/rafael-dos-santos-callegari-484b08212/" target="_blank" rel="noopener">
            <LinkedinIcon /> LinkedIn
          </a>
          <a className="btn" href="https://www.instagram.com/rafael_callegari_/" target="_blank" rel="noopener">
            <InstagramIcon /> Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
