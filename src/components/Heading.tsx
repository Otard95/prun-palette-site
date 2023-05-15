import type { Component, PropsWithChildren } from 'solid-js'

import styles from './Heading.module.css'

interface HeadingProps {
}

const h1: Component<PropsWithChildren<HeadingProps>> = (props) => (
  <h1 class={`${styles.heading} ${styles.h1}`}>
    {props.children}
  </h1>
)
const h2: Component<PropsWithChildren<HeadingProps>> = (props) => (
  <h2 class={`${styles.heading} ${styles.h2}`}>
    {props.children}
  </h2>
)
const h3: Component<PropsWithChildren<HeadingProps>> = (props) => (
  <h3 class={`${styles.heading} ${styles.h3}`}>
    {props.children}
  </h3>
)
const h4: Component<PropsWithChildren<HeadingProps>> = (props) => (
  <h4 class={`${styles.heading} ${styles.h4}`}>
    {props.children}
  </h4>
)
const h5: Component<PropsWithChildren<HeadingProps>> = (props) => (
  <h5 class={`${styles.heading} ${styles.h5}`}>
    {props.children}
  </h5>
)
const h6: Component<PropsWithChildren<HeadingProps>> = (props) => (
  <h6 class={`${styles.heading} ${styles.h6}`}>
    {props.children}
  </h6>
)

export default { h1, h2, h3, h4, h5, h6 }
