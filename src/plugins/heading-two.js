import React from 'react';
import { createPlugin, RenderButton, hasBlock } from '../helpers';
import { RenderNode } from '../hooks';
import { Button, Icon } from '../components';
import {
  DEFAULT_NODE,
  HEADING_TWO_NODE,
  LIST_ITEM_NODE,
  BULLETED_LIST_NODE,
  NUMBERED_LIST_NODE,
} from '../constants/editor';

const Node = ({ children }) => <h2>{children}</h2>;

const ToolbarButton = ({ editor }) => (
  <Button onClick={makeHandleClick(editor)}>
    <Icon>looks_two</Icon>
  </Button>
);

const makeHandleClick = editor => () => {
  const isList = hasBlock(editor, LIST_ITEM_NODE);
  const isActive = hasBlock(editor, HEADING_TWO_NODE);

  if (isList) {
    editor
      .setBlocks(isActive ? DEFAULT_NODE : HEADING_TWO_NODE)
      .unwrapBlock(BULLETED_LIST_NODE)
      .unwrapBlock(NUMBERED_LIST_NODE);
  } else {
    editor.setBlocks(isActive ? DEFAULT_NODE : HEADING_TWO_NODE);
  }
};

export default () =>
  createPlugin([
    RenderNode(HEADING_TWO_NODE, Node),
    RenderButton(ToolbarButton),
  ]);
