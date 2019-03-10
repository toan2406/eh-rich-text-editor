import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { Hotkey, RenderMark } from '../hooks';
import { Button, Icon } from '../components';

const handleHotKeyPress = editor => editor.toggleMark('italic');

const Mark = ({ children }) => <em>{children}</em>;

const ToolbarButton = ({ editor }) => (
  <Button onClick={editor.toggleMark.bind(editor, 'italic')}>
    <Icon>format_italic</Icon>
  </Button>
);

export default () =>
  createPlugin([
    Hotkey('mod+i', handleHotKeyPress),
    RenderMark('italic', Mark),
    RenderButton(ToolbarButton),
  ]);
