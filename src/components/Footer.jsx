import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="wrap">
        <p>© {new Date().getFullYear()} Rafael Callegari</p>
        <p>feito com <a href="#top">café &amp; código</a></p>
      </div>
    </motion.footer>
  )
}
