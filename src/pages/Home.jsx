import Hero from '../component/Hero'
import Skills from '../component/Skills'
import Contact from '../component/Contact'
import Projects from '../component/Projects'
export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}