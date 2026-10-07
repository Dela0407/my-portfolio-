export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-copy">
        <h1>KHOBBY DESIGNS</h1>
        <h2>Your imagination brought to life.</h2>
        <p className="lead">
          Welcome to the official website of <b>Khobby Designs.</b>
          <br></br>
          Hi, I’m Daniel Dela Apenuvor, the brain behind{" "}
          <em>KHOBBY DESIGNS. </em>
          I’m a university student who enjoys building digital experiences that
          combine creativity, logic, and problem-solving. I’m constantly
          learning, exploring new tools, and turning ideas into impactful web
          experiences. I am also into graphic design and together we can take
          your brand to the next level.
        </p>

        <div className="hero-actions">
          <a href="#skills" className="secondary-btn">
            View Skills
          </a>
          <a href="#projects" className="primary-btn">
            View My Works
          </a>
          <a href="#contact" className="secondary-btn">
            Let’s connect
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Profile summary">
        <div className="panel-card">
          <div className="avatar-ring">
            <img src="/public/khobbyDesigns.jpg" alt="Khobby Designs Profile"></img>
          </div>
          <span className="panel-label">
            <h3>Expert In </h3>
          </span>
          <strong>Graphic Design and Web Development</strong>
          <p>Building clean, functional, and memorable user experiences.</p>
        </div>
      </div>
    </section>
  );
}
