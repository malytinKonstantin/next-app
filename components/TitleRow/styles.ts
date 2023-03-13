import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Row as UIRow } from '@/ui-kit/base';
import { Title as UITitle } from '@/ui-kit';
import { TitleRowProps } from '@/components/TitleRow/types';
import { UiKitTheme } from '@/ui-kit/@themes';

export const Row = styled(UIRow)((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).titleRow.row;

  return css`
    color: ${color};
  `;
});

type TitleProps = Pick<TitleRowProps, 'level'>;
export const Title = styled(UITitle)<TitleProps>((props) => {
  const { level, theme } = props;
  const { color } = (theme as UiKitTheme).titleRow.title;

  if (level === 4) {
    return css`
      font-size: 16px;
      line-height: 28px;
      color: ${color};
    `;
  }

  return css`
    color: ${color};
  `;
});
