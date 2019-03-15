import React from 'react';
import styled from 'styled-components';
import { BORDER_COLOR, TEXT_COLOR, LIGHT_TEXT_COLOR } from '../constants/color';

const getBorderByProp = ({ isSeparated }) =>
  isSeparated ? `solid thin ${BORDER_COLOR}` : 'none';

const disabledItemStyle = `
  pointer-events: none;
  color: ${LIGHT_TEXT_COLOR};
`;

const Menu = styled.ul`
  position: absolute;
  top: 40px;
  left: -1px;
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  border: solid thin ${BORDER_COLOR};
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.li`
  min-width: 100px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: ${getBorderByProp};
  font-size: 0.85em;
  color: ${TEXT_COLOR};
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  ${({ disabled }) => (disabled ? disabledItemStyle : '')}
`;

export { Menu, MenuItem };
export default Menu;
