import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily, FontWeight } from '@/ui-kit/@constants';
import { SwitcherProps } from '@/ui-kit/Switcher/types';
import { Row as UIRow } from '@/ui-kit/base';
import { UiKitTheme } from '@/ui-kit/@themes';

type RowProps = Pick<SwitcherProps, 'disabled'>;
export const Row = styled(UIRow)<RowProps>((props) => {
  const { disabled, theme } = props;
  const { color, disabledColor } = (theme as UiKitTheme).switcherRow.row;

  return css`
    color: ${disabled ? disabledColor : color};
  `;
});

export const Content = styled.div(() => {
  return css`
    display: block;
    flex-grow: 1;
  `;
});

export const Title = styled.p(() => {
  return css`
    margin: 0;
    font-family: ${FontFamily.SFProText};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 28px;
  `;
});

export const Description = styled.div((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).switcherRow.description;

  return css`
    margin: 2px 0 0;
    color: ${color};
    font-family: ${FontFamily.SFProText};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 12px;
    line-height: 18px;

    p {
      margin: 0;
    }
  `;
});
