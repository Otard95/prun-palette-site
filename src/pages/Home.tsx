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

import Video from '../components/Video';

import styles from './Home.module.css'
import demoVideo from '../assets/demoV2.mp4'
import demoPlaceholder from '../assets/demo-placeholder.png'
import ExtensionGet from '../elements/ExtensionGet';

const Home: Component = () => {
  return (
    <div class={styles.content}>
      <div class={styles.banner}>
        <h1>
          Effortlessly Command Your Universe with&nbsp;
          <span class={styles['text-gradient']}>PrUn Palette</span>
        </h1>
        <p>
          Put any buffer, screen, or action at your fingertips!<br/>
          PrUn Palette is a browser extension that enhances your Prosperous Universe
          gameplay with a versatile and customizable command palette.
          Effortlessly manage buffers, navigate through inventories, and execute
          various commands. Embrace a new level of efficiency and watch
          your space empire thrive with PrUn Palette.
        </p>
        <ExtensionGet size='large'/>
        <Video
          src={demoVideo}
          placeholder={demoPlaceholder}
        />
      </div>
    </div>
  );
}

export default Home
