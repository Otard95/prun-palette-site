import type { Component, PropsWithChildren } from 'solid-js'

import styles from './Inset.module.css'

interface InsetProps {
}
const Inset: Component<PropsWithChildren<InsetProps>> = (props) => (
  <div class={styles.inset}>
    {props.children}
  </div>
)

export default Inset
