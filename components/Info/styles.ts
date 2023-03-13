import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily, FontWeight } from '@/ui-kit/@constants';
import { InfoType } from '@/components/Info/types';
import { Row as UIRow } from '@/ui-kit/base';
import { UiKitTheme } from '@/ui-kit/@themes';

interface RowProps {
  type: keyof typeof InfoType;
}
export const Row = styled(UIRow)<RowProps>((props) => {
  const { type, theme } = props;
  const { row } = (theme as UiKitTheme).info;

  return css`
    background-color: ${row[type]};
  `;
});

interface IconBoxProps {
  type: keyof typeof InfoType;
}
export const IconBox = styled.div<IconBoxProps>((props) => {
  const { type, theme } = props;
  const { color, bg } = (theme as UiKitTheme).info.infoBox;

  return css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${color};
    background-color: ${bg[type]};
  `;
});

export const Content = styled.div(() => {
  return css`
    display: block;
    flex-grow: 1;
  `;
});

export const Title = styled.p((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).info.title;

  return css`
    margin: 0;
    color: ${color};
    font-family: ${FontFamily.SFProText};
    font-style: normal;
    font-weight: ${FontWeight.w500};
    font-size: 16px;
    line-height: 28px;
  `;
});

export const Description = styled.div((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).info.description;

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
