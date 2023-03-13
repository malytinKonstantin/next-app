import { Row as UIRow } from '@/ui-kit/base/Row';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CheckBoxProps } from '@/ui-kit/Checkbox/types';
import { UiKitTheme } from '@/ui-kit/@themes';

type RowProps = Pick<CheckBoxProps, 'disabled' | 'error'>;

export const Row = styled(UIRow)<RowProps>((props) => {
  const { disabled: isDisabled, error: isError, theme } = props;
  const { normal, disabled, error } = (theme as UiKitTheme).checkBoxRow.row;

  let color = normal.color;
  let background = normal.bg;

  if (isError) {
    background = error.bg;
  }

  if (isDisabled) {
    color = disabled.color;
  }

  return css`
    color: ${color};
    background-color: ${background};
  `;
});

type PriceProps = Pick<CheckBoxProps, 'disabled'>;

export const Price = styled.span<PriceProps>((props) => {
  const { disabled: isDisabled, theme } = props;
  const { normal, disabled } = (theme as UiKitTheme).checkBoxRow.price;

  const background = isDisabled ? disabled.bg : normal.bg;

  return css`
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${background};
  `;
});
