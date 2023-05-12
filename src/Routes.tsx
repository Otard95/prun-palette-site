import type { Component } from 'solid-js'
import { Routes, Route } from '@solidjs/router'

import Home from './pages/Home'
import Features from './pages/Features'
import Privacy from './pages/Privacy'

const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/privacy" component={Privacy} />
    </Routes>
  )
}

export default AppRouter
