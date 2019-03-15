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
import bulletedList from './plugins/bulleted-list';
import alignmentLeft from './plugins/alignment-left';
import alignmentCenter from './plugins/alignment-center';
import alignmentRight from './plugins/alignment-right';
import table from './plugins/table';
import defaultNode from './plugins/default-node';
import schema from './schema';

const noop = () => {};

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

  image(),

  table(),

  defaultNode(),
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
            style={{ padding: 20 }}
          />
        </Content>
      </Container>
    );
  }
}

export default RichTextEditor;
