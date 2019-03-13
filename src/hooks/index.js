import React from 'react';
import { isKeyHotkey } from 'is-hotkey';

const Hotkey = (hotkey, fn) => ({
  onKeyDown(event, editor, next) {
    if (!isKeyHotkey(hotkey, event)) return next();
    event.preventDefault();
    editor.command(fn);
  },
});

const RenderMark = (type, Component) => ({
  renderMark(props, editor, next) {
    const { attributes, children, mark } = props;
    if (mark.type !== type) return next();
    return (
      <Component attributes={attributes} children={children} mark={mark} />
    );
  },
});

const RenderNode = (type, Component) => ({
  renderNode(props, editor, next) {
    const { attributes, children, node } = props;
    if (node.type !== type) return next();
    return (
      <Component attributes={attributes} children={children} node={node} />
    );
  },
});

export { Hotkey, RenderMark, RenderNode };
