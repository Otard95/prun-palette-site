import type { Component } from 'solid-js'
import { Routes, Route } from '@solidjs/router'

import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'

const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
    </Routes>
  )
}

export default AppRouter
