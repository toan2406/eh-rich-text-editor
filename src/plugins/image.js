import React from 'react';
import styled from 'styled-components';
import { createPlugin, RenderButton } from '../helpers';
import { RenderNode } from '../hooks';
import { Button, Icon } from '../components';
import { IMAGE_NODE } from '../constants/editor';

const getBorderByStatus = ({ selected }) =>
  selected ? 'solid thin blue' : 'none';

const Image = styled.img`
  display: block;
  max-width: 100%;
  border: ${getBorderByStatus};
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const Node = ({ node, isFocused, attributes }) => (
  <Image src={node.data.get('src')} selected={isFocused} {...attributes} />
);

const ToolbarButton = ({ editor }) => (
  <Button isSeparated>
    <Icon>insert_photo</Icon>
    <FileInput
      type="file"
      accept="image/png, image/jpeg"
      onChange={makeHandleUpload(editor)}
    />
  </Button>
);

const makeHandleUpload = editor => e => {
  const file = e.target.files[0];
  const reader = new FileReader();

  if (!file) return;

  reader.addEventListener('load', () => {
    editor.insertBlock({
      type: IMAGE_NODE,
      data: { src: reader.result },
    });
  });

  reader.readAsDataURL(file);
};

export default () =>
  createPlugin([RenderNode(IMAGE_NODE, Node), RenderButton(ToolbarButton)]);
