import React from 'react';
import { Editor } from 'slate-react';
import { Container, Toolbar, Content } from './components';
import schema from './schema';

const noop = () => {};

class RichTextEditor extends React.Component {
  state = { editor: null };

  ref = editor => this.setState({ editor });

  render() {
    const { editor } = this.state;
    const { value, onChange, plugins = [], ...otherProps } = this.props;
    const buttons =
      editor &&
      plugins.map(({ renderButton = noop }, index) =>
        renderButton({ key: index }, editor),
      );

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
            style={{ padding: 20 }}
            {...otherProps}
          />
        </Content>
      </Container>
    );
  }
}

export default RichTextEditor;
