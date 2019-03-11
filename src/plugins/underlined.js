import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { Hotkey, RenderMark } from '../hooks';
import { Button, Icon } from '../components';

const handleHotKeyPress = editor => editor.toggleMark('underlined');

const Mark = ({ children }) => <u>{children}</u>;

const ToolbarButton = ({ editor }) => (
  <Button isSeparated onClick={editor.toggleMark.bind(editor, 'underlined')}>
    <Icon>format_underlined</Icon>
  </Button>
);

export default () =>
  createPlugin([
    Hotkey('mod+u', handleHotKeyPress),
    RenderMark('underlined', Mark),
    RenderButton(ToolbarButton),
  ]);
