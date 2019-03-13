import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { Button, Icon } from '../components';

const ToolbarButton = ({ editor }) => (
  <Button onClick={makeHandleClick(editor)}>
    <Icon>format_align_left</Icon>
  </Button>
);

const makeHandleClick = editor => () => {
  editor.setBlocks({ data: { style: { textAlign: 'left' } } });
};

export default () => createPlugin([RenderButton(ToolbarButton)]);
