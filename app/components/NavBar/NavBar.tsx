import { Avatar } from '@mui/material'
import Container from '@mui/material/Container'
import { Link } from 'react-router'

import NavLink from '~/components/NavLink/NavLink'

import '@fontsource/press-start-2p/latin-400.css'
import styles from './NavBar.module.scss'

const AVATAR_SIZE = 36

export function NavBar() {
  return (
    <header className={styles.navbar}>
      <div aria-hidden="true" className={styles.navbar__art}>
        <span className={`${styles.navbar__trail} ${styles['navbar__trail--blue']}`} />
        <span className={`${styles.navbar__trail} ${styles['navbar__trail--violet']}`} />
        <span className={`${styles.navbar__trail} ${styles['navbar__trail--pink']}`} />
      </div>
      <Container className={styles.navbar__inner}>
        <Link className={styles.navbar__brand} to="/">
          <Avatar
            alt="Stylized photo of a woman with brown hair against a dark blue background"
            className={styles.navbar__avatar}
            src="/images/profile-photo.jpg"
            sx={{ height: AVATAR_SIZE, width: AVATAR_SIZE }}
          />
          dysbo.me
        </Link>
        <nav aria-label="Main navigation" className={styles.navbar__nav}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </Container>
    </header>
  )
}
