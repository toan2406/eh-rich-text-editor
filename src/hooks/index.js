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
    if (props.mark.type !== type) return next();
    return <Component {...props} />;
  },
});

const RenderNode = (type, Component) => ({
  renderNode(props, editor, next) {
    if (props.node.type !== type) return next();
    return <Component {...props} />;
  },
});

export { Hotkey, RenderMark, RenderNode };
