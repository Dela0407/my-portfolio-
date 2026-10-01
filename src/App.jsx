import './App.css'
import Hero from './component/Hero'
import Skills  from './component/Skills'
import Contact from './component/Contact'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="brand">Khobby Codes</div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
       <Hero />

       <Skills />

        <Contact />
      </main>

      <footer className="site-footer">
        <span aria-hidden="true">©</span> KhobbyCodes
      </footer>
    </>
  )
}

export default App
