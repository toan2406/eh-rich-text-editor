import React from 'react';
import DeepTable from 'slate-deep-table';
import styled from 'styled-components';
import { createPlugin, RenderButton } from '../helpers';
import { RenderNodes } from '../hooks';
import { Button, Icon, Menu, MenuItem } from '../components';
import {
  TABLE_NODE,
  TABLE_ROW_NODE,
  TABLE_CELL_NODE,
  PARAGRAPH_NODE,
} from '../constants/editor';
import { BORDER_COLOR } from '../constants/color';

const tablePlugin = DeepTable({
  typeTable: TABLE_NODE,
  typeRow: TABLE_ROW_NODE,
  typeCell: TABLE_CELL_NODE,
  typeContent: PARAGRAPH_NODE,
});

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border: solid thin ${BORDER_COLOR};
  border-collapse: collapse;
`;

const StyledTableRow = styled.tr`
  border: solid thin ${BORDER_COLOR};
`;

const StyledTableCell = styled.td`
  padding-left: 10px;
  padding-right: 10px;
  border: solid thin ${BORDER_COLOR};
`;

const Table = ({ attributes, children }) => (
  <StyledTable {...attributes}>
    <tbody>{children}</tbody>
  </StyledTable>
);

const TableRow = ({ attributes, children }) => (
  <StyledTableRow {...attributes}>{children}</StyledTableRow>
);

const TableCell = ({ attributes, children }) => (
  <StyledTableCell {...attributes}>{children}</StyledTableCell>
);

const ToolbarButton = ({ editor }) => {
  const isTableSelected = editor.isSelectionInTable(editor.value);
  return (
    <Button isSeparated>
      <Icon>border_all</Icon>
      <Menu>
        <MenuItem
          isSeparated
          disabled={isTableSelected}
          onClick={makeHandleInsertTable(editor)}>
          Insert table
        </MenuItem>
        <MenuItem
          disabled={!isTableSelected}
          onClick={makeHandleInsertRow(editor)}>
          Insert row
        </MenuItem>
        <MenuItem
          isSeparated
          disabled={!isTableSelected}
          onClick={makeHandleInsertColumn(editor)}>
          Insert column
        </MenuItem>
        <MenuItem
          disabled={!isTableSelected}
          onClick={makeHandleDeleteTable(editor)}>
          Delete table
        </MenuItem>
        <MenuItem
          disabled={!isTableSelected}
          onClick={makeHandleDeleteRow(editor)}>
          Delete row
        </MenuItem>
        <MenuItem
          disabled={!isTableSelected}
          onClick={makeHandleDeleteColumn(editor)}>
          Delete column
        </MenuItem>
      </Menu>
    </Button>
  );
};

const makeHandleInsertTable = editor => () => editor.insertTable();

const makeHandleInsertRow = editor => () => editor.insertRow();

const makeHandleInsertColumn = editor => () => editor.insertColumn();

const makeHandleDeleteTable = editor => () => editor.removeTable();

const makeHandleDeleteRow = editor => () => editor.removeRow();

const makeHandleDeleteColumn = editor => () => editor.removeColumn();

export default () =>
  createPlugin([
    tablePlugin,
    RenderNodes([
      [TABLE_NODE, Table],
      [TABLE_ROW_NODE, TableRow],
      [TABLE_CELL_NODE, TableCell],
    ]),
    RenderButton(ToolbarButton),
  ]);
