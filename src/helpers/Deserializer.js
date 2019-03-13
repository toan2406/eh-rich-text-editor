import React from 'react';
import { Record } from 'immutable';

/**
 * String.
 *
 * @type {String}
 */

const String = new Record({
  object: 'string',
  text: '',
});

/**
 * A rule to deserialize text nodes for HTML. For React native, users have to define their own
 * text deserializer. This is automatically added to the deserializer so that users
 * don't have to worry about text-level deserialization.
 *
 * @type {Object}
 */

const TEXT_RULE = (obj, children) => {
  if (obj.object === 'string') {
    return children.split('\n').reduce((array, text, i) => {
      if (i != 0) array.push(<br key={i} />);
      array.push(text);
      return array;
    }, []);
  }
};

/**
 * Deserializer.
 *
 * @type {Deserializer}
 */

class Deserializer {
  /**
   * Create a new deserializer with `rules`. `rules` is an array of deserializers.
   * Each deserializer is a function that define how a node is deserialized.
   *
   * @param {Object} options
   *   @property {Array} rules
   */

  constructor(options = {}) {
    const { rules = [] } = options;
    this.rules = [...rules, TEXT_RULE];
  }

  /**
   * Deserialize a `value` object into an HTML/React Native string.
   *
   * @param {Value} value
   * @return {String|Array}
   */

  deserialize = value => {
    const { document } = value;
    const elements = document.nodes.map(this.deserializeNode).filter(el => el);
    return elements;
  };

  /**
   * Deserialize a `node`.
   *
   * @param {Node} node
   * @return {String}
   */

  deserializeNode = node => {
    if (node.object === 'text') {
      const leaves = node.getLeaves();
      return leaves.map(this.deserializeLeaf);
    }

    const children = node.nodes.map(this.deserializeNode);

    for (const rule of this.rules) {
      const ret = rule(node, children);
      if (ret === null) return;
      if (ret) return addKey(ret);
    }

    throw new Error(`No deserializer defined for node of type "${node.type}".`);
  };

  /**
   * Deserialize a `leaf`.
   *
   * @param {Leaf} leaf
   * @return {String}
   */

  deserializeLeaf = leaf => {
    const string = new String({ text: leaf.text });
    const text = this.deserializeString(string);

    return leaf.marks.reduce((children, mark) => {
      for (const rule of this.rules) {
        const ret = rule(mark, children);
        if (ret === null) return;
        if (ret) return addKey(ret);
      }

      throw new Error(`No deserializer defined for mark of type "${mark.type}".`);
    }, text);
  };

  /**
   * Deserialize a `string`.
   *
   * @param {String} string
   * @return {String}
   */

  deserializeString = string => {
    for (const rule of this.rules) {
      const ret = rule(string, string.text);
      if (ret) return ret;
    }
  };
}

/**
 * Add a unique key to a React `element`.
 *
 * @param {Element} element
 * @return {Element}
 */

let key = 0;

function addKey(element) {
  return React.cloneElement(element, { key: key++ });
}

/**
 * Export.
 *
 * @type {Deserializer}
 */

export default Deserializer;
