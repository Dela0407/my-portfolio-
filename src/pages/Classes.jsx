import { Link } from "react-router-dom";
import Classes from "../assets/Classes.png";

export default function ClassesPage() {
  return (
    <main>
      <section className="info-section project-detail">
        <div className="project-detail-content">
          <p className="project-detail-eyebrow">My Third Project</p>
          <h2>Classes</h2>
          <img
            className="project-detail-image"
            src={Classes}
            alt="Classes project preview"
          />
          <h3>Classes promotional design</h3>
          <p>A flyer for a teacher to promote their classes.</p>
          <h3>Software Used</h3>
          <p>I used Canva to create the design.</p>
          <h3>Difficulties faced when building the project</h3>
          <p>
            Getting images and text to fit within the design while maintaining a
            clean and professional look that is visually appealing and easy to
            read.
          </p>
          <Link className="primary-btn project-detail-back" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
