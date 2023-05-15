import type { Component, PropsWithChildren } from 'solid-js'

import styles from './KeyboardShortcut.module.css'

interface KeyboardShortcutProps {
  key: string
  ctrl?: boolean
  alt?: boolean
  shift?: boolean
  label?: string
}
const KeyboardShortcut: Component<PropsWithChildren<KeyboardShortcutProps>> = ({
  key,
  ctrl,
  alt,
  shift,
  label,
  children,
}) => {
  const keyCombo = [
    ctrl ? 'Ctrl' : '',
    alt ? 'Alt' : '',
    shift ? 'Shift' : '',
    key
  ].filter(Boolean).join(' + ')
  return (
    <div class={styles.container}>
      <span class={styles.label}>
        {label}
      </span>
      <kbd class={styles.shortcut}>
        {keyCombo}
      </kbd>
      {children}
    </div>
  )
}

export default KeyboardShortcut
