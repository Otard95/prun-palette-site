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
