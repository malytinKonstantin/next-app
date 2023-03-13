import styled from '@emotion/styled';
import { Color } from '@/ui-kit/@constants';
import { css } from '@emotion/react';
import { UiKitTheme } from '@/ui-kit/@themes';

type WrapperProps = { isOpen: boolean };

export const Wrapper = styled.div<WrapperProps>((props) => {
  const { isOpen, theme } = props;
  const { bgColor } = (theme as UiKitTheme).dialog;

  return css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${isOpen ? bgColor : 'transparent'}50;
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transition: 0.3s;
  `;
});
