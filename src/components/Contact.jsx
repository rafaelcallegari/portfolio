import { motion } from 'framer-motion'
import AnimatedLine from './AnimatedLine'
import { containerVariants, itemVariants } from '../lib/motion'
import { EmailIcon, PhoneIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contato">
      <AnimatedLine />

      <motion.div
        className="wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        style={{ paddingTop: 64 }}
      >
        <motion.p className="eyebrow" variants={itemVariants}>// vamos conversar</motion.p>
        <motion.h2 className="sec-title" variants={itemVariants}>Contato</motion.h2>
        <motion.p className="lead" variants={itemVariants}>
          Tem um projeto em mente ou quer trocar uma ideia sobre IA, automação ou dados?
          Me chama — respondo rápido.
        </motion.p>

        <motion.div className="contact-row" variants={containerVariants}>
          {[
            { href: 'mailto:rafaelcallegarid@gmail.com', icon: <EmailIcon />, label: 'rafaelcallegarid@gmail.com', primary: true },
            { href: 'tel:+5511999789551',                icon: <PhoneIcon />, label: '(11) 99978-9551' },
            { href: 'https://www.linkedin.com/in/rafael-dos-santos-callegari-484b08212/', label: 'LinkedIn', external: true },
            { href: 'https://github.com/rafaelcallegari',  label: 'GitHub',    external: true },
            { href: 'https://instagram.com/rafael_callegari_', label: 'Instagram', external: true },
          ].map(({ href, icon, label, primary, external }) => (
            <motion.a
              key={label}
              className={`btn${primary ? ' primary' : ''}`}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener' } : {})}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {icon}
              {label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
