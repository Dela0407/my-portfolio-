import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Books from "./pages/Bookstore";
import Classes from "./pages/Classes";
import Bookshop from "./pages/Bookshop";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="brand">Khobby Designs</div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/books" element={<Books />} />
        <Route path="/projects/bookshop" element={<Bookshop />} />
        <Route path="/projects/classes" element={<Classes />} />
        <Route path="/pages/Classes" element={<Classes />} />
        <Route path="/pages/Bookstore" element={<Books />} />
        <Route path="/pages/Bookshop" element={<Bookshop />} />
      </Routes>
      <footer className="site-footer">
        <span aria-hidden="true">©</span> Khobby Designs
      </footer>
    </>
  );
}

export default App;
