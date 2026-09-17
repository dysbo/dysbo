import { NavLink as ReactRouterNavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router'
import type { PropsWithChildren } from 'react'
import styles from './NavLink.module.scss'

const activeStatusClass = ({ isActive }: NavLinkRenderProps) =>
  `${styles.navLink}${isActive ? ` ${styles.active}` : ""}`

export default function NavLink(props: PropsWithChildren<NavLinkProps>) {
  return (
    <ReactRouterNavLink
      className={activeStatusClass}
      {...props}
    />
  )
}
