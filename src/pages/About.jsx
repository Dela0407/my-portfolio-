
export default function About() {
  return (
    <section id="about" className="hero">
      <div className="hero-copy">
        <h3>Hi, I’m Daniel Dela Apenuvor</h3>
        <p className="lead">
          I’m a university student who enjoys building digital
          experiences that combine creativity, logic, and problem-solving. I’m
          constantly learning, exploring new tools, and turning ideas into
          impactful web experiences.
        </p>
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