import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily } from '@/ui-kit/@constants';
import { Icon } from '../Icon';
import { UiKitTheme } from '@/ui-kit/@themes';

export const Wrapper = styled.div((props) => {
  const { theme } = props;
  const { color, bg } = (theme as UiKitTheme).tabBar.wrapper;

  return css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 83px;

    padding: 0 12px;

    color: ${color};
    background: ${bg};

    box-shadow: 0px 0px 35px rgba(9, 9, 10, 0.1);
    border-radius: 32px 32px 0px 0px;
  `;
});

interface TabProps {
  isActive: boolean;
  notification?: number | string;
}

export const Tab = styled.div<TabProps>((props) => {
  const { isActive, notification: notificationText, theme } = props;
  const { color, activeColor, hover, active, notification } = (
    theme as UiKitTheme
  ).tabBar.tab;

  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 50px;

    padding: 6px 0px;

    cursor: pointer;
    color: ${isActive ? activeColor : color};

    &:hover {
      color: ${hover.color};
    }

    &:active {
      gap: 4px;
      color: ${active.color};
      background: ${active.bg};
      border-radius: 8px;
    }

    ${notificationText &&
    `
        &::before {
          content: "${notificationText}";
          position: absolute;
          top: 4px;
          left: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          min-height: 12px;

          background: ${notification.bg};
          border-radius: 24px;
          font-family: ${FontFamily.SFProText};
          font-style: normal;
          font-weight: 600;
          font-size: 8px;
          line-height: 8px;
          text-align: center;
          color: ${notification.color};
        }
      `}
  `;
});

export const TabIcon = styled(Icon)`
  margin-bottom: 6px;
  svg {
    fill: currentColor;
  }
`;

export const ActiveState = styled.div((props) => {
  const { theme } = props;
  const { bg } = (theme as UiKitTheme).tabBar.activeState;

  return css`
    width: 4px;
    height: 4px;
    background: ${bg};
    border-radius: 50%;
  `;
});
