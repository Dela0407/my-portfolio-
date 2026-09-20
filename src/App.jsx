import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'            

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 className="my-heading">Daniel Dela Apenuvor</h1>
          <p className="my-paragraph">
I am a passionate student of computer science, dedicated to exploring the ever-evolving world of technology. With a keen interest in software development and a drive for continuous learning, I strive to create innovative solutions that make a positive impact. My journey in the field is fueled by curiosity, creativity, and a commitment to excellence, as I work towards mastering the art of coding and contributing to the tech community.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>My Skills</h2>
          <p>Areas of expertise(still developing)</p>
          <ul>
            <li>
             Graphic Design
            </li>
            <li>
             Web Development
            </li>
            <li>Programming</li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Join the Apenuvor community</p>
          <ul>
            <li>
              Phone Number: +233 54 609 0448
            </li>
            <li>
              Email: <a href="mailto:apenuvordaniel47@gmail.com">apenuvordaniel47@gmail.com</a>
            </li>
            <li>
              <a href="https://x.com/pope_dela" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com: @pope_dela
              </a>
            </li>
            <li>
              Snapchat: <a href="https://www.snapchat.com/add/naa.shb" target="_blank">Khobby Daniels</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
