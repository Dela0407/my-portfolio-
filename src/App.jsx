import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1 className="my-heading">Daniel Dela Apenuvor</h1>
          <p className="my-paragraph">
            I am a passionate student of computer science, dedicated to exploring the ever-evolving world of technology. With a keen interest in software development and a drive for continuous learning, I strive to create innovative solutions that make a positive impact. My journey in the field is fueled by curiosity, creativity, and a commitment to excellence, as I work towards mastering the art of coding and contributing to the tech community.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>My Skills</h2>
          <p>Areas of expertise (still developing)</p>
          <ul>
            <li>Graphic Design</li>
            <li>Web Development</li>
            <li>Programming</li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Join the Apenuvor community</p>
          <ul className="contact-list">
            <li>
              <a className="contact-button" href="tel:+233546090448">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+233 54 609 0448</span>
                <span className="contact-arrow" aria-hidden="true">-&gt;</span>
              </a>
            </li>
            <li>
              <a className="contact-button" href="mailto:apenuvordaniel47@gmail.com">
                <span className="contact-label">Email</span>
                <span className="contact-value">apenuvordaniel47@gmail.com</span>
                <span className="contact-arrow" aria-hidden="true">-&gt;</span>
              </a>
            </li>
            <li>
              <a className="contact-button" href="https://x.com/pope_dela" target="_blank" rel="noreferrer">
                <span className="contact-label">X.com</span>
                <span className="contact-value">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                  @pope_dela
                </span>
                <span className="contact-arrow" aria-hidden="true">-&gt;</span>
              </a>
            </li>
            <li>
              <a className="contact-button" href="https://github.com/Dela0407" target="_blank" rel="noreferrer">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/Dela0407</span>
                <span className="contact-arrow" aria-hidden="true">-&gt;</span>
              </a>
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
