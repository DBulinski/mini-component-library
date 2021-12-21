import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: min-content;
`

const SelectComponent = styled.select`
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  appearance: none;
  cursor: pointer;
  color: ${COLORS.gray700};
  
  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`

const Chevron = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  currentColor: white;
`

const Select = ({ label, value, onChange, children }) => {
  return (
    <Wrapper>
      <SelectComponent aria-label={label} value={value} onChange={onChange}>
        {children}
      </SelectComponent>
      <Chevron id="chevron-down" />
    </Wrapper>
  );
};

export default Select;
