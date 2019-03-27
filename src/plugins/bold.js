import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { Hotkey, RenderMark } from '../hooks';
import { Button, Icon } from '../components';

const handleHotKeyPress = editor => editor.toggleMark('bold');

const Mark = ({ children, attributes }) => (
  <strong {...attributes}>{children}</strong>
);

const ToolbarButton = ({ editor }) => (
  <Button onClick={editor.toggleMark.bind(editor, 'bold')}>
    <Icon>format_bold</Icon>
  </Button>
);

export default () =>
  createPlugin([
    Hotkey('mod+b', handleHotKeyPress),
    RenderMark('bold', Mark),
    RenderButton(ToolbarButton),
  ]);
