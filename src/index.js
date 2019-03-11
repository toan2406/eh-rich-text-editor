import React from 'react';
import { Editor } from 'slate-react';
import { Container, Toolbar, Content } from './components';

import branch from './plugins/branch';
import bold from './plugins/bold';
import italic from './plugins/italic';
import underlined from './plugins/underlined';
import headingOne from './plugins/heading-one';
import headingTwo from './plugins/heading-two';
import image from './plugins/image';
import numberedList from './plugins/numbered-list';
import bulletedList, { listItem } from './plugins/bulleted-list';
import schema from './schema';

const noop = () => {};

const plugins = [
  branch(),
  bold(),
  italic(),
  underlined(),
  headingOne(),
  headingTwo(),
  image(),
  numberedList(),
  bulletedList(),
  listItem(),
];

class RichTextEditor extends React.Component {
  state = { editor: null };

  ref = editor => this.setState({ editor });

  render() {
    const { editor } = this.state;
    const { value, onChange } = this.props;
    const buttons =
      editor && plugins.map(({ renderButton = noop }) => renderButton(editor));

    return (
      <Container>
        <Toolbar>{buttons}</Toolbar>
        <Content>
          <Editor
            ref={this.ref}
            plugins={plugins}
            value={value}
            onChange={onChange}
            schema={schema}
          />
        </Content>
      </Container>
    );
  }
}

export default RichTextEditor;
