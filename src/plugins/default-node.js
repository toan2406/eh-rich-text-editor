import React from 'react';
import { createPlugin } from '../helpers';
import { RenderNode } from '../hooks';
import { DEFAULT_NODE } from '../constants/editor';

const Node = ({ children, attributes, node: { data } }) => (
  <p {...attributes} style={data.get('style')}>
    {children}
  </p>
);

export default () => createPlugin([RenderNode(DEFAULT_NODE, Node)]);
