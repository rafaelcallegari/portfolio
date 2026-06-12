import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from './Icons'

/*
  Nav — barra de navegação sticky.

  Animações:
  - O header inteiro desliza de y: -20 → 0 e faz fade ao montar (uma vez, no load)
  - Cada link do nav entra com delay crescente (stagger manual) para um
    efeito em cascata discreto
  - O botão de tema usa whileTap para um feedback de "pressionar" (scale: 0.88)
  - onToggleTheme é passado pelo App.jsx e altera o data-theme no <html>
*/

const navLinks = [
  { label: 'sobre',       href: '#sobre' },
  { label: 'projetos',    href: '#projetos' },
  { label: 'freelas',     href: '#freelas' },
  { label: 'experiência', href: '#experiencia' },
  { label: 'contato',     href: '#contato' },
]

export default function Nav({ theme, onToggleTheme }) {
  return (
    <motion.header
      className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-inner">
        <a className="brand" href="#top">
          rafael.callegari<span className="dot">.dev</span>
        </a>

        <nav className="nav-links">
          {navLinks.map(({ label, href }, i) => (
            <motion.a
              key={label}
              className="lnk"
              href={href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
            >
              {label}
            </motion.a>
          ))}

          <motion.button
            className="toggle"
            aria-label="Alternar tema claro/escuro"
            onClick={onToggleTheme}
            whileTap={{ scale: 0.88 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}
