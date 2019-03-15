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
const ListNode = ({ children }) => <ol>{children}</ol>;

const ToolbarButton = ({ editor }) => (
  <Button isSeparated onClick={makeHandleClick(editor)}>
    <Icon>format_list_numbered</Icon>
  </Button>
);

const makeHandleClick = editor => () => {
  const isList = hasBlock(editor, LIST_ITEM_NODE);
  const isNumberedList = hasWrappedBlock(editor, NUMBERED_LIST_NODE);

  if (isList && isNumberedList)
    return editor.setBlocks(DEFAULT_NODE).unwrapBlock(NUMBERED_LIST_NODE);

  if (isList)
    return editor.unwrapBlock(BULLETED_LIST_NODE).wrapBlock(NUMBERED_LIST_NODE);

  return editor.setBlocks(LIST_ITEM_NODE).wrapBlock(NUMBERED_LIST_NODE);
};

export default () =>
  createPlugin([
    RenderNodes([[NUMBERED_LIST_NODE, ListNode], [LIST_ITEM_NODE, ItemNode]]),
    RenderButton(ToolbarButton),
  ]);
