import { Component, createMemo } from 'solid-js'
import { A, useLocation } from '@solidjs/router'

import styles from './Header.module.css'

import Logo from '../components/Logo'

const links: { name: string, href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Privacy', href: '/privacy' },
]

const Header: Component = () => {
  const location = useLocation()
  const pathname = createMemo(() => location.pathname)
  return (
    <header class={styles.header}>
      <span style={{'grid-area': 'logo'}}>
        <Logo />
      </span>
      <nav>
        {links.map((link, i) => (
          <A href={link.href} class={`${styles.navLink} ${pathname() === link.href ? styles.active : ''}`}>
            {link.name}
          </A>
        ))}
      </nav>
    </header>
  )
}

export default Header
