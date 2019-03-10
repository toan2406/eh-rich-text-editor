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
import schema from './schema';

const plugins = [
  branch(),
  bold(),
  italic(),
  underlined(),
  headingOne(),
  headingTwo(),
  image(),
];

class RichTextEditor extends React.Component {
  state = { editor: null };

  ref = editor => this.setState({ editor });

  render() {
    const { editor } = this.state;
    const { value, onChange } = this.props;
    const buttons = editor && plugins.map(plug => plug.renderButton(editor));

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
