import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { Hotkey, RenderMark } from '../hooks';

const handleHotKeyPress = editor => editor.toggleMark('bold');

const Mark = ({ children }) => <strong>{children}</strong>;

const Button = ({ editor }) => (
  <button onClick={() => editor.toggleMark('bold')}>Bold</button>
);

export default () =>
  createPlugin([
    Hotkey('mod+b', handleHotKeyPress),
    RenderMark('bold', Mark),
    RenderButton(Button),
  ]);
