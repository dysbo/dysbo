import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import NavLink from '~/components/NavLink/NavLink'
import styles from './NavLink.module.scss'
import type { PropsWithChildren } from 'react'

describe('NavLink', () => {
  it('should not render link as active when not on the page', () => {
    render(<NavLink to="/whatever">Whatever</NavLink>, { wrapper: MemoryRouter });

    const link = screen.getByRole('link', { name: /whatever/i });
    expect(link).toHaveClass(styles.navLink)
    expect(link).not.toHaveClass(styles.active)
  })

  it('should render link as active when currently on the page', () => {
    const wrapper = ({ children }: PropsWithChildren) =>
      <MemoryRouter initialEntries={['/whatever']} children={children} />

    render(<NavLink to="/whatever">Whatever</NavLink>, { wrapper })

    const link = screen.getByRole('link', { name: /whatever/i });
    expect(link).toHaveClass(styles.navLink)
    expect(link).toHaveClass(styles.active)
  })
})
