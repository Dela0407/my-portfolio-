import { Link } from "react-router-dom";
import BooksImage from "../assets/book.png";
import BookshopImage from "../assets/bookshop.png";
import ClassesImage from "../assets/Classes.png";

const projects = [
  {
    title: "Books",
    path: "/pages/Bookstore",
    image: BooksImage,
    description: "A book design exploring layout, imagery, and typography.",
  },
  {
    title: "Bookshop",
    path: "/projects/bookshop",
    image: BookshopImage,
    description: "A promotional flyer for a bookshop and its new releases.",
  },
  {
    title: "Classes",
    path: "/projects/classes",
    image: ClassesImage,
    description: "A visual design for presenting classes and learning options.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="info-section">
      <div className="section-heading">
        <h3>Selected Projects</h3>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.path}>
            <img src={project.image} alt={`${project.title} project preview`} />
            <div className="project-copy">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
            <Link className="primary-btn project-link" to={project.path}>
              View project
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
