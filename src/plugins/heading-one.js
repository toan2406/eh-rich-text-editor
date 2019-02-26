import React from 'react';
import { createPlugin, RenderButton } from '../helpers';
import { RenderNode } from '../hooks';

const DEFAULT_NODE = 'paragraph';

const Node = ({ children }) => <h1>{children}</h1>;

const Button = ({ editor }) => (
  <button
    onClick={() => {
      const headingType = 'heading-one';
      const { value } = editor;
      const hasBlock = type => value.blocks.some(node => node.type == type);
      const isActive = hasBlock(headingType);
      const isList = hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : headingType)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : headingType);
      }
    }}>
    Heading 1
  </button>
);

export default () =>
  createPlugin([RenderNode('heading-one', Node), RenderButton(Button)]);
