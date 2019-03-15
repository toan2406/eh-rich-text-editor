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

const RenderNodes = rules => ({
  renderNode(props, editor, next) {
    const { attributes, children, node } = props;
    return rules.reduce((element, rule) => {
      const [type, Component] = rule;
      if (node.type !== type) return element;
      return (
        <Component attributes={attributes} children={children} node={node} />
      );
    }, next());
  },
});

export { Hotkey, RenderMark, RenderNode, RenderNodes };
