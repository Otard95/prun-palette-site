import { Component, createMemo, createSignal } from 'solid-js'
import { A, useLocation } from '@solidjs/router'

import styles from './Header.module.css'
import burger from '../assets/burger-light.png'

import Logo from '../components/Logo'
import ExtLink from '../components/ExtLink'
import ExtensionGet from './ExtensionGet'

const links: { name: string, href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Privacy', href: '/privacy' },
]

const Header: Component = () => {
  const location = useLocation()
  const pathname = createMemo(() => location.pathname)
  const [ open, setOpen ] = createSignal(false)

  return (
    <header class={styles.header}>
      <span style={{'grid-area': 'logo'}}>
        <Logo />
      </span>
      <div class={styles['ext']}>
        <div class={open() ? styles['ext-burger-show'] : ''}>
          <button onClick={() => setOpen(!open())} class={styles['ext-burger']} style={`background-image: url("${burger}");`}/>
          <p>Get the extension or check out the source code!</p>
          <ExtensionGet />
          <ExtLink href='https://www.google.com/chrome/'>Github</ExtLink>
        </div>
      </div>
      <hr/>
      <nav>
        {links.map((link, i) => (
          <A href={link.href} class={`${styles['nav-link']} ${pathname() === link.href ? styles.active : ''}`}>
            {link.name}
          </A>
        ))}
      </nav>
    </header>
  )
}

export default Header
