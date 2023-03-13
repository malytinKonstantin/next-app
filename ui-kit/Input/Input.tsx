import React from 'react';
import { useId } from '@/hooks';
import { InputBase } from '@/ui-kit/base/InputBase';
import { Icon } from '@/ui-kit/Icon';
import { Color } from '@/ui-kit/@constants';
import { ButtonProps, InputProps } from './types';
import * as Styled from './styles';

type InputButtonProps = ButtonProps & {
  btn: 'left' | 'right';
};

export const Button: React.FC<InputButtonProps> = (props) => {
  const { children, btn, icon, disabled } = props;
  const StyledButton = btn === 'left' ? Styled.LeftButton : Styled.RightButton;
  const iconFill = disabled
    ? Color.foodCity.Black_Oven_10
    : Color.foodCity.Black_Oven_35;
  return (
    <StyledButton {...props}>
      {children || (icon && <Icon name={icon} fill={iconFill} />)}
    </StyledButton>
  );
};

export const Input: React.FC<InputProps> = (props) => {
  const {
    onChange,
    placeholder,
    leftButton,
    rightButton,
    disabled,
    forwardRef,
    ...rest
  } = props;

  const handleChange = disabled ? undefined : onChange;
  const id = useId();

  return (
    <InputBase id={id} {...rest}>
      {leftButton && <Button btn="left" {...leftButton} disabled={disabled} />}
      <Styled.Input
        id={id}
        {...props}
        placeholder={placeholder}
        forwardRef={forwardRef}
        onChange={handleChange}
      />
      {rightButton && (
        <Button btn="right" {...rightButton} disabled={disabled} />
      )}
    </InputBase>
  );
};
