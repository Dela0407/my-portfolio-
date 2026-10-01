export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Student Engineer</p>
        <h1>Hi, I’m Daniel Dela Apenuvor</h1>
        <h2>Your imagination brought to life.</h2>
        <p className="lead">
          I’m a passionate computer science student who enjoys building digital
          experiences that combine creativity, logic, and problem-solving. I’m
          constantly learning, exploring new tools, and turning ideas into
          impactful web experiences.
        </p>

        <div className="hero-actions">
          <a href="#skills" className="primary-btn">
            View Skills
          </a>
          <a href="#contact" className="secondary-btn">
            Let’s connect
          </a>
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
  );
}
