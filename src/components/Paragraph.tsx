import type { Component, PropsWithChildren } from 'solid-js'

import styles from './Paragraph.module.css'

interface ParagraphProps {
}
const Paragraph: Component<PropsWithChildren<ParagraphProps>> = (props) => (
  <p class={styles.paragraph}>
    {props.children}
  </p>
)

export default Paragraph
