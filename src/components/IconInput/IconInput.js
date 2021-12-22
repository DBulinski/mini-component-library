import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  width: var(--input-width);
`

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: var(--input-padding);
  color: ${COLORS.gray700};
  
  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding: var(--input-padding);
  padding-left: var(--padding-left);
  font-weight: 700;
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`

const sizes = { small: {
    icon: "16px",
    font: "14px",
    paddingLeft: "24px",
    padding: "4px",
    borderWidth: "1px"
  }, large: {
    padding: "9px",
    paddingLeft: "32px",
    icon: "24px",
    font: "18px",
    borderWidth: "2px"
  } };

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizeValues = sizes[size];

  return <Wrapper style={{ "--border-width": sizeValues.borderWidth, "--input-width": width + "px", "--icon-size": sizeValues.icon, "--font-size": sizeValues.font, "--padding-left": sizeValues.paddingLeft, "--input-padding": sizeValues.padding }}>
    <StyledIcon size={sizeValues.icon} id={icon} />
    <VisuallyHidden htmlFor={`${label}--id`}>{label}</VisuallyHidden>
    <Input id={`${label}--id`} placeholder={placeholder} type="text" />
  </Wrapper>
};

export default IconInput;
