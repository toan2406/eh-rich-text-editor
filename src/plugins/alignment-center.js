import React from 'react';
import { setIn } from 'immutable';
import { createPlugin, RenderButton } from '../helpers';
import { Button, Icon } from '../components';

const ToolbarButton = ({ editor }) => (
  <Button onClick={makeHandleClick(editor)}>
    <Icon>format_align_center</Icon>
  </Button>
);

const makeHandleClick = editor => () =>
  editor.value.blocks.forEach(block =>
    editor.setNodeByKey(
      block.key,
      setIn(block.toJS(), ['data', 'style', 'textAlign'], 'center'),
    ),
  );

export default () => createPlugin([RenderButton(ToolbarButton)]);
