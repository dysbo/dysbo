import Container from "@mui/material/Container";
import { Link, NavLink } from "react-router";
import "@fontsource/press-start-2p/latin-400.css";
import styles from "./Navbar.module.scss";
import { Avatar } from '@mui/material'

const AVATAR_SIZE = 36

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div aria-hidden="true" className={styles.navbar__art}>
        <span className={`${styles.navbar__trail} ${styles["navbar__trail--blue"]}`} />
        <span className={`${styles.navbar__trail} ${styles["navbar__trail--violet"]}`} />
        <span className={`${styles.navbar__trail} ${styles["navbar__trail--pink"]}`} />
      </div>
      <Container className={styles.navbar__inner}>
        <Link className={styles.navbar__brand} to="/">
          <Avatar
            alt="Stylized photo of a woman with brown hair against a dark blue background"
            src="/images/profile-photo.jpg"
            sx={{ height: AVATAR_SIZE, width: AVATAR_SIZE }}
          />
          dysbo.me
        </Link>
        <nav aria-label="Main navigation" className={styles.navbar__nav}>
          <NavLink
            className={({ isActive }) =>
              `${styles.navbar__link}${isActive ? ` ${styles["navbar__link--active"]}` : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.navbar__link}${isActive ? ` ${styles["navbar__link--active"]}` : ""}`
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
