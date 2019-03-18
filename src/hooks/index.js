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
      <Component attributes={attributes} mark={mark}>
        {children}
      </Component>
    );
  },
});

const RenderNode = (type, Component) => ({
  renderNode(props, editor, next) {
    const { attributes, children, node, isFocused } = props;
    if (node.type !== type) return next();
    return (
      <Component attributes={attributes} node={node} isFocused={isFocused}>
        {children}
      </Component>
    );
  },
});

const RenderNodes = rules => ({
  renderNode(props, editor, next) {
    const { attributes, children, node, isFocused } = props;
    return rules.reduce((element, rule) => {
      const [type, Component] = rule;
      if (node.type !== type) return element;
      return (
        <Component attributes={attributes} node={node} isFocused={isFocused}>
          {children}
        </Component>
      );
    }, next());
  },
});

export { Hotkey, RenderMark, RenderNode, RenderNodes };
