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
import UAParser from 'ua-parser-js'
import ExtLink, { ExtLinkProps } from '../components/ExtLink'

import styles from './ExtensionGet.module.css'

const chromeUrl = 'https://chrome.google.com/webstore/detail/prun-palette/lfnnlbomdeeijpmgigmkkdemhpjelikg'
const firefoxUrl = 'https://addons.mozilla.org/en-US/firefox/addon/prun-palette/'

const compatibleBrowsers = ['Chrome', 'Chromium', 'Opera', 'Vivaldi', 'Brave', 'Firefox']
const browserToProps = new Map<string, ExtLinkProps>([
  ['Chrome', { href: chromeUrl, color: '#1967d2' }],
  ['Chromium', { href: chromeUrl, color: '#1967d2' }],
  ['Opera', { href: chromeUrl, color: '#1967d2' }],
  ['Vivaldi', { href: chromeUrl, color: '#1967d2' }],
  ['Brave', { href: chromeUrl, color: '#1967d2' }],
  ['Firefox', { href: firefoxUrl, color: '#ed226f' }],
])

interface BrowserNotFoundProps {
  incompatible?: boolean
  size?: 'small' | 'medium' | 'large'
}
const BrowserNotFound: Component<BrowserNotFoundProps> = ({ incompatible, size }) => {
  return (
    <div class={styles['browser-not-found']}>
      {incompatible && size === 'large' && (
        <p>
          Your browser may not be compatible with this extension.
        </p>
      )}
      <div>
        <ExtLink color='#1967d2' href={chromeUrl} size={size}>
          {size === 'large' && 'Get for '}Chrome
        </ExtLink>
        <ExtLink color='#ed226f' href={firefoxUrl} size={size}>
          {size === 'large' && 'Get for '}Firefox
        </ExtLink>
      </div>
    </div>
  )
}

interface ExtensionGetProps {
  size?: 'small' | 'medium' | 'large'
}
const ExtensionGet: Component<ExtensionGetProps> = ({ size }) => {

  const browserName = new UAParser().getBrowser().name || ''

  const props = browserToProps.get(browserName)
  if (compatibleBrowsers.includes(browserName) && props) return (
    <ExtLink {...props} size={size}>{size === 'large' && 'Get for '}{browserName}</ExtLink>
  )

  const incompatible =
    Boolean(browserName)
    && !compatibleBrowsers.includes(browserName)
  return <BrowserNotFound incompatible={incompatible} size={size} />

}

export default ExtensionGet
