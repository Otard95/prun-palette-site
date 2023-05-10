import type { Component } from 'solid-js'

import Video from '../components/Video';

import styles from './Home.module.css'
import demoVideo from '../assets/demo.mp4'
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
