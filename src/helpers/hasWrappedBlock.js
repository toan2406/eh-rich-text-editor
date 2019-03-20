export default (editor, type) =>
  editor.value.blocks.some(node =>
    editor.value.document.getClosest(node.key, parent => parent.type === type),
  );
