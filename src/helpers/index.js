import React from 'react';

const merge = objs => objs.reduce((r, o) => ({ ...r, ...o }), {});

const createPlugin = merge;

const RenderButton = Component => ({
  renderButton(editor) {
    return <Component editor={editor} />;
  },
});

export { merge, createPlugin, RenderButton };
