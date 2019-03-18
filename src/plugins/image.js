import React from 'react';
import { Block } from 'slate';
import styled from 'styled-components';
import { createPlugin, RenderButton } from '../helpers';
import { RenderNode } from '../hooks';
import { Button, Icon } from '../components';
import { IMAGE_NODE } from '../constants/editor';
import { IMAGE_PLACEHOLDER_COLOR } from '../constants/color';

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

const Placeholder = styled.div.attrs({
  children: 'Uploading...',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  border: ${getBorderByStatus};
  background: ${IMAGE_PLACEHOLDER_COLOR};
`;

const Node = ({ node, isFocused, attributes }) => {
  const src = node.data.get('src');
  if (!src) return <Placeholder selected={isFocused} {...attributes} />;
  return <Image src={src} selected={isFocused} {...attributes} />;
};

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

  if (!file) return;

  const image = Block.create({
    type: IMAGE_NODE,
    data: { src: '' },
  });

  editor.insertBlock(image);

  setTimeout(() => {
    editor.setNodeByKey(image.key, {
      data: {
        src: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?w=500',
      },
    });
  }, 3000);
};

export default () =>
  createPlugin([RenderNode(IMAGE_NODE, Node), RenderButton(ToolbarButton)]);
