import { Link } from "react-router-dom";
import BookshopImage from "../assets/bookshop.png";

export default function Bookshop() {
  return (
    <main>
      <section className="info-section project-detail">
        <div className="project-detail-content">
          <p className="project-detail-eyebrow">My Second Project</p>
          <h2>Bookshop</h2>
          <img
            className="project-detail-image"
            src={BookshopImage}
            alt="Bookshop flyer project preview"
          />
          <h3>Bookshop promotional flyer</h3>
          <p>
            A bookshop flyer designed to promote new releases and special
            offers.
          </p>
          <h3>Software Used</h3>
          <p>I used Adobe Photoshop and Illustrator to create the design.</p>
          <h3>Difficulties faced when building the project</h3>
          <p>
            Getting the colors just right and ensuring all elements were
            properly aligned.
          </p>
          <Link className="primary-btn project-detail-back" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
