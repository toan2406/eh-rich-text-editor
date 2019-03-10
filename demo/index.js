import React from 'react';
import { Value } from 'slate';
import styled from 'styled-components';
import RichTextEditor from '../src';

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
`;

class Demo extends React.Component {
  state = { value: initialValue };

  handleChange = ({ value }) => this.setState({ value });

  render() {
    return (
      <Wrapper>
        <RichTextEditor value={this.state.value} onChange={this.handleChange} />
      </Wrapper>
    );
  }
}

export default Demo;
