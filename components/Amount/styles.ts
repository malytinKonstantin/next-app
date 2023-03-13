import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Text } from '@/ui-kit';
import { UiKitTheme } from '@/ui-kit/@themes';

export const Wrapper = styled.span<{ isDisabled?: boolean }>((props) => {
  const { isDisabled, theme } = props;
  const { disabled } = (theme as UiKitTheme).amount;

  return css`
    display: flex;

    padding: 4px 8px;
    width: fit-content;
    ${isDisabled &&
    `
      border-radius: 8px;
      background-color: ${disabled.bg};
      color: ${disabled.color};
    `}
  `;
});

export const OldValue = styled(Text)((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).amount.oldValue;

  return css`
    color: ${color};
  `;
});
