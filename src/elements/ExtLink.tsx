import type { Component, PropsWithChildren } from 'solid-js'

import styles from './ExtLink.module.css'

interface ExtLinkProps {
  href: string
  color?: string
}
const ExtLink: Component<PropsWithChildren<ExtLinkProps>> = ({ href, children, color }) => {
  return (
    <a class={styles['chrome-link']} href={href} style={{ 'border-color': color }}>
      {children}
    </a>
  )
}

export default ExtLink
