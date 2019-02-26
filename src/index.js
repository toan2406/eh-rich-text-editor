import React from 'react';
import { Editor } from 'slate-react';
import { Toolbar } from './components/Toolbar';
import bold from './plugins/bold';
import headingOne from './plugins/heading-one';

const plugins = [bold(), headingOne()];

class RichTextEditor extends React.Component {
  state = {
    editor: null,
  };

  ref = editor => this.setState({ editor });

  render() {
    const { editor } = this.state;
    const { value, onChange } = this.props;

    return (
      <div>
        <Toolbar>{plugins.map(plugin => plugin.renderButton(editor))}</Toolbar>
        <Editor
          ref={this.ref}
          plugins={plugins}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default RichTextEditor;
