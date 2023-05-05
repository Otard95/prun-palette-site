import type { Component } from 'solid-js'

import styles from './Logo.module.css'
import LogoImage from '../assets/logo128.png'

const Logo: Component = () => {
  return (
    <div class={styles.logo}>
      <img src={LogoImage} alt="Logo" />
      <h1>PrUn Palette</h1>
    </div>
  )
}

export default Logo
