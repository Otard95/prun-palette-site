import type { Component } from 'solid-js'

import styles from './App.module.css'
import Routes from './Routes'
import Header from './elements/Header'
// import Footer from './elements/Footer';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <div class={styles.page}>
        <Routes />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
