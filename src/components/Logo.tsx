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
