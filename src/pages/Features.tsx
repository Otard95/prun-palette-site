import type { Component } from 'solid-js'

import styles from './Features.module.css'

import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Inset from '../components/Inset';
import KeyboardShortcut from '../components/KeyboardShortcut';

const Features: Component = () => {
  return (
    <div class={styles.content}>
      <Heading.h2>What is PrUn Palette?</Heading.h2>
      <Paragraph>
        PrUn Palette is a browser extension designed to enhance the gameplay of
        Prosperous Universe. It provides a unique feature, often referred to as
        a 'command palette', which simplifies in-game actions, making them
        easily accessible via a few keystrokes.
        <br />
        <br />
        For those unfamiliar, a command palette acts like a search pop-over.
        It's a tool that lets you type what you want to do in discreet parts,
        and offers completion suggestions and options that match your input
        along the way. No longer do you need to navigate through various menus
        or remember specific commands. With PrUn Palette, you're guided to the
        correct command seamlessly. Each suggested command can potentially save
        you several clicks and eliminate the need to manually enter a command
        in a buffer.
      </Paragraph>

      <br />

      <Heading.h2>Features</Heading.h2>
      <br />
      <Inset>
        <Heading.h4>Command Palette</Heading.h4>
        <Paragraph>
          The command palette, PrUn Palette's core feature, facilitates buffer
          management, navigation, and action execution with just a few
          keystrokes, all from a pop-over triggered by a simple keyboard shortcut.
        </Paragraph>
        <Inset>
          <KeyboardShortcut key='p' ctrl label="Open the palette"/>
        </Inset>
      </Inset>
      <br />
      <Inset>
        <Heading.h4>Fuzzy completion</Heading.h4>
        <Paragraph>
          A smart feature that aids command input. Even if your input doesn't
          match the beginning of a command exactly, fuzzy completion suggests
          commands that contain the same characters in the same order as your
          input. This makes finding and inputting commands quicker and less
          rigid, allowing you to get to your command faster.
        </Paragraph>
        <Inset>
          <KeyboardShortcut key='Tab' label="Complete suggestion"/>
        </Inset>
        <Inset>
          <KeyboardShortcut key='Enter' label="Execute suggested"/>
        </Inset>
      </Inset>
    </div>
  );
}

export default Features
