import { Component, createMemo, PropsWithChildren } from 'solid-js'

import styles from './ExtLink.module.css'

export interface ExtLinkProps {
  href: string
  color?: string
  size?: 'small' | 'medium' | 'large'
}
const ExtLink: Component<PropsWithChildren<ExtLinkProps>> = ({
  href,
  children,
  color,
  size = 'medium',
}) => {
  const sizeClass = createMemo(() => styles[size])
  return (
    <a
      class={`${sizeClass()} ${styles['external-link']}`}
      href={href} style={{ 'border-color': color }}
    >
      {children}
    </a>
  )
}

export default ExtLink
