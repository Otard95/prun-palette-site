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
