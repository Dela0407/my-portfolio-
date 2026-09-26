import './App.css'

const skills = [
  'Graphic Design',
  'Web Development',
  'Programming',
  'UI/UX Thinking',
  'Problem Solving',
  'Creative Tech',
]

const contacts = [
  { label: 'Phone', value: '+233 54 609 0448', href: 'tel:+233546090448', accent: 'phone' },
  { label: 'Email', value: 'apenuvordaniel47@gmail.com', href: 'mailto:apenuvordaniel47@gmail.com', accent: 'email' },
  { label: 'X', value: '@pope_dela', href: 'https://x.com/pope_dela', accent: 'x' },
  { label: 'GitHub', value: 'github.com/Dela0407', href: 'https://github.com/Dela0407', accent: 'github' },
]

function App() {
  return (
    <>
      <header className="site-header">
        <div className="brand">Daniel Dela</div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Student Engineer</p>
            <h1>Hi, I’m Daniel Dela Apenuvor</h1>
            <h2>Your imagination brought to life.</h2>
            <p className="lead">
              I’m a passionate computer science student who enjoys building digital experiences
              that combine creativity, logic, and problem-solving. I’m constantly learning,
              exploring new tools, and turning ideas into impactful web experiences.
            </p>

            <div className="hero-actions">
              <a href="#skills" className="primary-btn">Explore my skills</a>
              <a href="#contact" className="secondary-btn">Let’s connect</a>
            </div>

            <ul className="quick-facts" aria-label="Quick facts">
              <li>Web Development</li>
              <li>Creative Design</li>
              <li>Continuous Learning</li>
            </ul>
          </div>

          <div className="hero-panel" aria-label="Profile summary">
            <div className="panel-card">
              <div className="avatar-ring">
                <div className="avatar">DA</div>
              </div>
              <span className="panel-label">Currently learning</span>
              <strong>Frontend + design systems</strong>
              <p>Building clean, functional, and memorable user experiences.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="info-section">
          <div className="section-heading">
            <p className="eyebrow">My skills</p>
            <h3>Areas I’m growing in</h3>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="info-section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Connect</p>
            <h3>Let’s build something meaningful</h3>
          </div>

          <div className="contact-grid">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                className={`contact-card contact-${contact.accent}`}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-icon" aria-hidden="true">{contact.label.charAt(0)}</span>
                <div className="contact-copy">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
                <span className="contact-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span aria-hidden="true">©</span> Daniel Dela Apenuvor
      </footer>
    </>
  )
}

export default App
