import React from 'react';

const RenderButton = Component => ({
  renderButton(editor) {
    return <Component editor={editor} />;
  },
});

export default RenderButton;
