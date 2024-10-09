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

import styles from './Features.module.css'

import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Inset from '../components/Inset';
import KeyboardShortcut from '../components/KeyboardShortcut';
import BufferCmd from '../components/BufferCmd';

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
      <br />
      <Inset>
        <Heading.h4>Keyboard shortcuts</Heading.h4>
        <Paragraph>
          PrUn Palette also allows you to create your own keyboard shortcuts!<br/>
          You can create keyboard shortcut to open a buffer with a specific
          buffer command, or you can create a keyboard shortcut for a palette
          command.<br/>
          For example you can create a shortcut for opening the&nbsp;
          <BufferCmd>flt</BufferCmd>, <BufferCmd>conts</BufferCmd> or&nbsp;
          <BufferCmd>contd</BufferCmd> commands in a buffer; or use the&nbsp;
          <BufferCmd>fleet · unload · {'{'}ship-name{'}'}</BufferCmd> palette
          command.<br/>
          Edit your keybinds in the settings! Use the&nbsp;<BufferCmd>settings</BufferCmd>&nbsp;
          palette command to open them.
        </Paragraph>
        <Paragraph>
          <b>Keybins in PrUn Palette are a little different to what you might be
          used to.</b> Normally keyboard shortcut are defined by holding a modifier
          like <KeyboardShortcut ctrl key='' inline/> or&nbsp;
          <KeyboardShortcut alt key='' inline/> while pressing another key.
          Though you of course still can use keys with modifiers with PrUn
          Palette the main difference is that a keyboard shortcut can be a&nbsp;
          <b>sequence of keys.</b>
        </Paragraph>

        <Heading.h5>Sequential Key Presses</Heading.h5>
        <Paragraph>
          In PrUn Palette, instead of pressing multiple keys at the same time,
          you can define shortcuts that are sequences of key presses. This means
          that to trigger an action, you press one key after another in a
          specific order.
        </Paragraph>
        <Paragraph>
          For example you could create a keyboard shortcut with the&nbsp;
          <i>key sequences</i>&nbsp;<KeyboardShortcut key='cl' inline/> to open
          you contract list <BufferCmd>conts</BufferCmd>. To use this keybind
          you would first press the <KeyboardShortcut key='c' inline/> key on
          its own, followed by the <KeyboardShortcut key='l' inline/> key, again
          on its own.
        </Paragraph>

        <Heading.h5>Using modifiers</Heading.h5>
        <Paragraph>
          As mentioned you can still use modifiers in your keyboard shortcuts.
          It does look a bit different though. Let's use the built-in keyboard
          shortcut for opening the palette as an example. If you where to define
          this yourself you would define the keyboard shortcut&nbsp;
          <KeyboardShortcut key='<C-p>' inline />. Here the&nbsp;
          <KeyboardShortcut key ='C' inline /> is for&nbsp;
          <KeyboardShortcut ctrl key='' inline /> and its enclosed in angle
          brackets (<KeyboardShortcut key='<...>' inline />) to day that you need
          press the&nbsp;<KeyboardShortcut ctrl key='' inline /> and&nbsp;
          <KeyboardShortcut key='p' inline/> keys at the same time.
        </Paragraph>
        <Paragraph>
          You can use more than one modifier for each key, for example&nbsp;
          <KeyboardShortcut ctrl shift key='a' inline /> would be written like&nbsp;
          <KeyboardShortcut key='<CS-a>' inline />. But you cannot have more than
          one key in this group, that is&nbsp;<KeyboardShortcut key='<C-pa>' inline />
          is not possible; you'd have to do&nbsp; <KeyboardShortcut key='<C-p><C-a>' inline />.
        </Paragraph>

        <Heading.h5>Special keys</Heading.h5>
        <Paragraph>
          You can use all letter keys in your keyboard shortcuts, and most symbols.
          For example&nbsp;<KeyboardShortcut key='cl' inline /> works fine, but&nbsp;
          <KeyboardShortcut key='c<' inline /> does not. This is because some symbols,
          in this case&nbsp;<KeyboardShortcut key='<' inline /> have special meaning.
          In this case you'd have to use the&nbsp;<i>key sequence</i>&nbsp;
          <KeyboardShortcut key='c<lt>' inline />. Below you'll find a table of
          all the special keys that are used this way.
        </Paragraph>

        <table>
          <thead>
            <tr>
              <th>Key sequence</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><KeyboardShortcut key='<up>' inline /></td>
            <td>Up arrow key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<down>' inline /></td>
            <td>Down arrow key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<left>' inline /></td>
            <td>Left arrow key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<right>' inline /></td>
            <td>Right arrow key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<tab>' inline /></td>
            <td>Tab key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<esc>' inline /></td>
            <td>Escape key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<enter>' inline /></td>
            <td>Enter key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<return>' inline /></td>
            <td>Return key (same as Enter)</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<cr>' inline /></td>
            <td>Carriage Return key (equivalent to Enter)</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<bs>' inline /></td>
            <td>Backspace key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<del>' inline /></td>
            <td>Delete key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<home>' inline /></td>
            <td>Home key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<end>' inline /></td>
            <td>End key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<pageup>' inline /></td>
            <td>Page Up key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<pagedown>' inline /></td>
            <td>Page Down key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<space>' inline /></td>
            <td>Spacebar</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<insert>' inline /></td>
            <td>Insert key</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<lt>' inline /></td>
            <td>Less-than symbol key (`&lt;`)</td>
          </tr>
          <tr>
            <td><KeyboardShortcut key='<gt>' inline /></td>
            <td>Greater-than symbol key (`&gt;`)</td>
          </tr>
          </tbody>
        </table>
      </Inset>
    </div>
  );
}

export default Features
