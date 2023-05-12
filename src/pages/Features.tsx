import type { Component } from 'solid-js'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';

const About: Component = () => {
  return (
    <div>
      <Heading.h2>Getting Started: What is PrUn Palette?</Heading.h2>
      <Paragraph>
        PrUn Palette is a browser extension designed to enhance the gameplay of
        Prosperous Universe. It provides a unique feature, often referred to as
        a 'command palette', which simplifies in-game commands and actions,
        making them easily accessible via a few keystrokes.
        <br />
        <br />
        For those unfamiliar, a command palette acts like a mini control panel.
        Instead of having to navigate through various menus or remember
        specific command sequences, you can just type into the command palette
        and it will suggest the actions you might be looking for.
      </Paragraph>
    </div>
  );
}

export default About
