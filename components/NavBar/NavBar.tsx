import React, { FC } from 'react';
import { Icon } from '@/ui-kit';
import * as Styled from './styles';
import { NavBarProps, NavBarButtonProps } from './types';

const NavBarButton: FC<NavBarButtonProps> = (props) => {
  const { leftIcon, rightIcon, caption, isLeft, onClick } = props;

  return (
    <Styled.Button isLeft={isLeft} onClick={onClick}>
      {leftIcon && (
        <Styled.IconWrapper>
          <Icon {...leftIcon} />
        </Styled.IconWrapper>
      )}
      {caption && <Styled.Caption>{caption}</Styled.Caption>}
      {rightIcon && (
        <Styled.IconWrapper>
          <Icon {...rightIcon} />
        </Styled.IconWrapper>
      )}
    </Styled.Button>
  );
};

const NavBarCenterButton: FC<NavBarButtonProps> = (props) => {
  const { onClick, leftIcon, rightIcon, caption } = props;

  return (
    <Styled.CenterButton onClick={onClick}>
      {leftIcon && <Icon {...leftIcon} />}
      {caption && <span>{caption}</span>}
      {rightIcon && <Icon {...rightIcon} />}
    </Styled.CenterButton>
  );
};

export const NavBar: FC<NavBarProps> = (props) => {
  const { leftButton, centerButton, rightButton, title, ...rest } = props;
  return (
    <Styled.Wrapper {...rest}>
      <Styled.ButtonsWrapper>
        <Styled.ButtonWrapper isLeft>
          {leftButton && <NavBarButton {...leftButton} isLeft />}
        </Styled.ButtonWrapper>

        <Styled.TitleWrapper>
          {centerButton && <NavBarCenterButton {...centerButton} />}
          {title && <Styled.Title>{title}</Styled.Title>}
        </Styled.TitleWrapper>

        <Styled.ButtonWrapper>
          {rightButton && <NavBarButton {...rightButton} />}
        </Styled.ButtonWrapper>
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};
