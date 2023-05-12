import type { Component } from 'solid-js'
import UAParser from 'ua-parser-js'
import ExtLink, { ExtLinkProps } from '../components/ExtLink'

import styles from './ExtensionGet.module.css'

const compatibleBrowsers = ['Chrome', 'Chromium', 'Opera', 'Vivaldi', 'Brave', 'Firefox']
const browserToProps = new Map<string, ExtLinkProps>([
  ['Chrome', { href: 'https://www.google.com/chrome/', color: '#1967d2' }],
  ['Chromium', { href: 'https://www.google.com/chrome/', color: '#1967d2' }],
  ['Opera', { href: 'https://www.google.com/chrome/', color: '#1967d2' }],
  ['Vivaldi', { href: 'https://www.google.com/chrome/', color: '#1967d2' }],
  ['Brave', { href: 'https://www.google.com/chrome/', color: '#1967d2' }],
  ['Firefox', { href: 'https://addons.mozilla.org', color: '#ed226f' }],
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
        <ExtLink color='#1967d2' href='https://www.google.com/chrome/' size={size}>
          {size === 'large' && 'Get for '}Chrome
        </ExtLink>
        <ExtLink color='#ed226f' href='https://addons.mozilla.org' size={size}>
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
