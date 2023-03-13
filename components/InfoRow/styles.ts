import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Row as UIRow } from '@/ui-kit/base';
import { FontFamily, FontWeight } from '@/ui-kit/@constants';
import { UiKitTheme } from '@/ui-kit/@themes';

interface RowProps {
  disabled: boolean;
}

export const Row = styled(UIRow)<RowProps>((props) => {
  const { disabled: isDisabled, theme } = props;
  const { color, disabledColor } = (theme as UiKitTheme).infoRow.row;

  return css`
    color: ${isDisabled ? disabledColor : color};
  `;
});

export const IconBox = styled.div((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).infoRow.iconBox;

  return css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${color};
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
  const { color } = (theme as UiKitTheme).infoRow.description;

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
