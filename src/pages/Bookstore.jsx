import { Link } from "react-router-dom";
import Book from "../assets/book.png";

export default function BooksPage() {
  return (
    <main>
      <section className="info-section project-detail">
        <div className="project-detail-content">
          <p className="project-detail-eyebrow">My First Project</p>
          <h2>Books</h2>
          <img
            className="project-detail-image"
            src={Book}
            alt="Books project preview"
          />
          <h3>A flyer for a bookshop</h3>
          <p>
            A bookshop flyer designed to promote new releases and special
            offers.
          </p>
          <h3>What I used</h3>
          <p>I used Adobe Photoshop and Illustrator to create the design.</p>
          <h3>Difficulties faced when building the project</h3>
          <p>
            Getting the layout just right and ensuring all elements were
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
