import type { Component } from 'solid-js'

import styles from './Video.module.css'

interface VideoProps {
  src: string
  placeholder: string
  loop?: boolean
  noControls?: boolean
  autoplay?: boolean
}
const Video: Component<VideoProps> = ({
  src,
  placeholder,
  loop,
  noControls,
  autoplay
}) => {
  return (
    <video
      class={styles.video}
      src={src}
      poster={placeholder}
      controls={!noControls}
      preload="metadata"
      loop={loop}
      autoplay={autoplay}
    />
  )
}

export default Video
