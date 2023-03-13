import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily, FontWeight } from '@/ui-kit/@constants';
import { Row as UIRow } from '@/ui-kit/base';
import { UiKitTheme } from '@/ui-kit/@themes';
import { TextRowProps } from './types';

type RowProps = Pick<TextRowProps, 'disabled'>;
export const Row = styled(UIRow)<RowProps>((props) => {
  const { disabled, theme } = props;
  const { color, disabledColor } = (theme as UiKitTheme).textRow.row;

  return css`
    flex-wrap: wrap;
    align-items: flex-start;
    color: ${disabled ? disabledColor : color};
  `;
});

export const Header = styled.div(() => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
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

export const Label = styled.span(() => {
  return css`
    margin: 0;
    font-family: ${FontFamily.SFProText};
    font-style: normal;
    font-weight: ${FontWeight.w700};
    font-size: 16px;
    line-height: 28px;
  `;
});

export const Description = styled.p((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).textRow.description;

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
