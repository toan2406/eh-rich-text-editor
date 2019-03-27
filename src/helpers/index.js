import React from 'react';

const merge = objs => objs.reduce((r, o) => ({ ...r, ...o }), {});

const createPlugin = merge;

const RenderButton = Component => ({
  renderButton(props, editor) {
    return <Component {...props} editor={editor} />;
  },
});

const hasBlock = (editor, type) =>
  editor.value.blocks.some(node => node.type === type);

const hasWrappedBlock = (editor, type) =>
  editor.value.blocks.some(node =>
    editor.value.document.getClosest(node.key, parent => parent.type === type),
  );

export { merge, createPlugin, RenderButton, hasBlock, hasWrappedBlock };
