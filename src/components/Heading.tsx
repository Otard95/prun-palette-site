/*
    PrUn Palette - A command pallet for Prosperous Universe
    Copyright (C) 2023  Stian Myklebostad

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/
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
