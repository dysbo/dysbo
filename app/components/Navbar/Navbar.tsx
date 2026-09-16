import Container from "@mui/material/Container";
import { Link, NavLink } from "react-router";
import "@fontsource/press-start-2p/latin-400.css";
import "./Navbar.scss";

export function Navbar() {
  return (
    <header className="navbar">
      <div aria-hidden="true" className="navbar__art">
        <span className="navbar__trail navbar__trail--blue" />
        <span className="navbar__trail navbar__trail--violet" />
        <span className="navbar__trail navbar__trail--pink" />
      </div>
      <Container className="navbar__inner">
        <Link className="navbar__brand" to="/">
          dysbo.me
        </Link>
        <nav aria-label="Main navigation" className="navbar__nav">
          <NavLink
            className={({ isActive }) =>
              `navbar__link${isActive ? " navbar__link--active" : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navbar__link${isActive ? " navbar__link--active" : ""}`
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
