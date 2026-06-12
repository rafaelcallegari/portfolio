import { useState, useEffect } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Freelance from './components/Freelance'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  App — raiz da aplicação.

  Gerencia o tema (claro/escuro):
  - O estado é inicializado uma vez: tenta ler do localStorage, depois
    checa a preferência do sistema (prefers-color-scheme), e usa 'light'
    como fallback
  - useEffect aplica o tema ao <html data-theme="..."> — as CSS custom
    properties do globals.css mudam automaticamente com isso
  - A função toggleTheme é passada para o Nav como prop, mantendo o
    estado em um único lugar (App), sem context API desnecessário
*/
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
    } catch {}
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <ScrollProgress />
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Freelance />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
