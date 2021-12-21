/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {css} from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BaseProgressBar = styled.div`
  display: flex;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

const LargeProgressBar = styled(BaseProgressBar)`
  height: 24px;
  border-radius: 8px;
`

const MediumProgressBar = styled(BaseProgressBar)`
  height: 12px;
  border-radius: 4px;
`

const SmallProgressBar = styled(BaseProgressBar)`
  height: 8px;
  border-radius: 4px;
`

const Progress = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;

  &::after {
    display: block;
    content: " ";
    height: 100%;
    background-color: ${COLORS.primary};
    width: ${({$value}) => $value}%;
  }
  
  ${LargeProgressBar} & {
    margin: 4px;
    height: calc(100% - 8px);
  }
`

const componentBySize = {
  small: SmallProgressBar,
  medium: MediumProgressBar,
  large: LargeProgressBar
}

const ProgressBar = ({ value, size }) => {
  if(value < 0 || value > 100) {
    throw new Error("Value has to be a integer between 0 and 100")
  }

  const Component = componentBySize[size];

  return <Component role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <VisuallyHidden>{value}%</VisuallyHidden>
    <Progress $value={value} />
  </Component>;
};

export default ProgressBar;
