import React from 'react';
import { createPlugin } from '../helpers';
import { RenderNode } from '../hooks';
import { DEFAULT_NODE } from '../constants/editor';

const Node = ({ children, node: { data } }) => (
  <p style={data.get('style')}>{children}</p>
);

export default () => createPlugin([RenderNode(DEFAULT_NODE, Node)]);
