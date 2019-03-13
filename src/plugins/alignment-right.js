import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { Button, Icon } from '../components';

const ToolbarButton = ({ editor }) => (
  <Button isSeparated onClick={makeHandleClick(editor)}>
    <Icon>format_align_right</Icon>
  </Button>
);

const makeHandleClick = editor => () => {
  editor.setBlocks({ data: { style: { textAlign: 'right' } } });
};

export default () => createPlugin([RenderButton(ToolbarButton)]);
