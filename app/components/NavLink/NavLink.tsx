import { NavLink as ReactRouterNavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router'

import styles from './NavLink.module.scss'

import type { PropsWithChildren } from 'react'

const activeStatusClass = ({ isActive }: NavLinkRenderProps) =>
  `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`

export default function NavLink(props: PropsWithChildren<NavLinkProps>) {
  return (
    <ReactRouterNavLink
      className={activeStatusClass}
      {...props}
    />
  )
}
