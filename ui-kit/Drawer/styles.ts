import styled from '@emotion/styled';
import { UiKitTheme } from '@/ui-kit/@themes';
import { DrawerProps } from './types';

type WrapperProps = Pick<DrawerProps, 'position'> & {
  isOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>((props) => {
  const { position, isOpen, theme } = props;
  const { bg } = (theme as UiKitTheme).drawer;

  const positionToStyle = {
    top: `
      border-radius: 0 0 32px 32px;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      transform: ${isOpen ? 'translateY(0%)' : 'translateY(-100%)'};
    `,
    right: `
      border-radius: 32px 0 0 32px;
      top: 0;
      right: 0;
      width: auto;
      height: 100%;
      transform: ${isOpen ? 'translateX(0%)' : 'translateX(100%)'};
    `,
    bottom: `
      border-radius: 32px 32px 0 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: auto;
      transform: ${isOpen ? 'translateY(0%)' : 'translateY(100%)'};
    `,
    left: `
      border-radius: 0 32px 32px 0;
      top: 0;
      left: 0;
      width: auto;
      height: 100%;
      transform: ${isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
    `,
  };

  return `
    position: fixed;
    ${positionToStyle[position!]};

    padding: 16px;
    background: ${bg};
    box-shadow: 0px 0px 35px rgba(9, 9, 10, 0.1);
    transition: 0.3s;
    z-index: 999;
  `;
});
