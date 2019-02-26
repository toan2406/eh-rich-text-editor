import React from 'react';
import { Value } from 'slate';
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

class Demo extends React.Component {
  state = {
    value: initialValue,
  };

  handleChange = ({ value }) => this.setState({ value });

  render() {
    return (
      <RichTextEditor value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default Demo;
