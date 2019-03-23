import React from 'react';
import { Value } from 'slate';
import styled from 'styled-components';
import RichTextEditor from '../src';
import {
  branch,
  headingOne,
  headingTwo,
  bold,
  italic,
  underlined,
  alignmentLeft,
  alignmentCenter,
  alignmentRight,
  numberedList,
  bulletedList,
  image,
  table,
  defaultNode,
} from '../src/plugins';
import { BORDER_COLOR } from '../src/constants/color';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

const Wrapper = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;

const DataViewer = styled.code`
  display: block;
  padding: 20px;
  margin-top: 20px;
  border: solid thin ${BORDER_COLOR};
  border-radius: 4px;
  background: rgb(247, 247, 247);
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap;
`;

const catImageUrl =
  'https://images.pexels.com/photos/20787/pexels-photo.jpg?w=500';

const mockUploadImage = () =>
  new Promise(resolve => setTimeout(() => resolve(catImageUrl), 3000));

const plugins = [
  branch(),
  headingOne(),
  headingTwo(),
  bold(),
  italic(),
  underlined(),
  alignmentLeft(),
  alignmentCenter(),
  alignmentRight(),
  numberedList(),
  bulletedList(),
  image({
    uploadImage: mockUploadImage,
  }),
  table(),
  defaultNode(),
];

class Demo extends React.Component {
  state = { value: initialValue };

  handleChange = ({ value }) => this.setState({ value });

  render() {
    return (
      <Wrapper>
        <RichTextEditor
          value={this.state.value}
          onChange={this.handleChange}
          plugins={plugins}
        />
        <DataViewer>
          {JSON.stringify(this.state.value.toJSON(), null, 2)}
        </DataViewer>
      </Wrapper>
    );
  }
}

export default Demo;
