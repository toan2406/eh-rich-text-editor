export default (editor, type) =>
  editor.value.blocks.some(node => node.type === type);
