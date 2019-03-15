import React from 'react';
import styled from 'styled-components';
import {
  ACTIVE_BUTTON_COLOR,
  INACTIVE_BUTTON_COLOR,
  BORDER_COLOR,
} from '../constants/color';
import { Menu } from './Menu';

const getColorByStatus = ({ active }) =>
  active ? ACTIVE_BUTTON_COLOR : INACTIVE_BUTTON_COLOR;

const getBorderByProp = ({ isSeparated }) =>
  isSeparated ? `solid thin ${BORDER_COLOR}` : 'none';

export default styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  border-right: ${getBorderByProp};
  color: ${getColorByStatus};
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.03);

    ${Menu} {
      display: block;
    }
  }
`;
