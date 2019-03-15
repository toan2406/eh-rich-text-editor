import React from 'react';
import {
  createPlugin,
  RenderButton,
  hasBlock,
  hasWrappedBlock,
} from '../helpers';
import { RenderNodes } from '../hooks';
import { Button, Icon } from '../components';
import {
  DEFAULT_NODE,
  LIST_ITEM_NODE,
  BULLETED_LIST_NODE,
  NUMBERED_LIST_NODE,
} from '../constants/editor';

const ItemNode = ({ children }) => <li>{children}</li>;
const ListNode = ({ children }) => <ul>{children}</ul>;

const ToolbarButton = ({ editor }) => (
  <Button isSeparated onClick={makeHandleClick(editor)}>
    <Icon>format_list_bulleted</Icon>
  </Button>
);

const makeHandleClick = editor => () => {
  const isList = hasBlock(editor, LIST_ITEM_NODE);
  const isBulletedList = hasWrappedBlock(editor, BULLETED_LIST_NODE);

  if (isList && isBulletedList)
    return editor.setBlocks(DEFAULT_NODE).unwrapBlock(BULLETED_LIST_NODE);

  if (isList)
    return editor.unwrapBlock(NUMBERED_LIST_NODE).wrapBlock(BULLETED_LIST_NODE);

  return editor.setBlocks(LIST_ITEM_NODE).wrapBlock(BULLETED_LIST_NODE);
};

export default () =>
  createPlugin([
    RenderNodes([[BULLETED_LIST_NODE, ListNode], [LIST_ITEM_NODE, ItemNode]]),
    RenderButton(ToolbarButton),
  ]);
