import { BLOCK_LIST, BLOCK_LIST_ITEM, BLOCK_LIST_ITEM_TITLE, BLOCK_LIST_ITEM_ROW } from '../constants/deserializer';

const getBlockListItemData = (header, headerIndex, body) => {
  const blockListTitle = {
    object: 'block',
    type: BLOCK_LIST_ITEM_TITLE,
    nodes: header.nodes,
  };

  const blockListRows = body.reduce((result, row) => {
    const blockListRow = {
      object: 'block',
      type: BLOCK_LIST_ITEM_ROW,
      nodes: [...row.nodes[0].nodes, ...row.nodes[headerIndex].nodes],
    };
    return [...result, blockListRow];
  }, []);

  return {
    object: 'block',
    type: BLOCK_LIST_ITEM,
    nodes: [blockListTitle, ...blockListRows],
  };
};

const transformTableToBlockList = tableNode => {
  const tableRows = tableNode.nodes;
  const headers = tableRows[0].nodes;
  const body = tableRows.slice(1);

  const nodes = headers.reduce((blockListNodes, header, headerIndex) => {
    if (headerIndex === 0) return blockListNodes;

    const blockListItem = getBlockListItemData(header, headerIndex, body);

    return [...blockListNodes, blockListItem];
  }, []);

  return {
    object: 'block',
    type: BLOCK_LIST,
    nodes,
  };
};

const transformNode = node => {
  if (node.object === 'text') return node;

  if (node.object === 'block' && node.type === 'table') {
    return transformTableToBlockList(node);
  }

  return {
    ...node,
    nodes: node.nodes.map(transformNode),
  };
};

const transformTableData = data => {
  const { document } = data;
  const elements = document.nodes.map(transformNode);
  return {
    document: {
      nodes: elements,
    },
  };
};

export default transformTableData;
