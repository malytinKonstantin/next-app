import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Align, JustifyContent, Direction } from './types';
import type { RowProps, ColProps } from './types';

export const Row = styled.div<RowProps>((props) => {
  const {
    justify = JustifyContent.start,
    align = Align.middle,
    gutter = 0,
    mb = 0,
    direction = Direction.row,
  } = props;

  const justifyContentMap = {
    [JustifyContent.start]: 'flex-start',
    [JustifyContent.end]: 'flex-end',
    [JustifyContent.center]: 'center',
    [JustifyContent.around]: 'space-around',
    [JustifyContent.between]: 'space-between',
  };

  const alignMap = {
    [Align.top]: 'flex-start',
    [Align.middle]: 'center',
    [Align.bottom]: 'flex-end',
    [Align.baseline]: 'baseline',
  };

  const margin = Array.isArray(gutter)
    ? gutter.map((g) => g + 'px').join(' ')
    : gutter + 'px';

  return css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${direction};
    justify-content: ${justifyContentMap[justify]};
    align-items: ${alignMap[align]};
    margin-bottom: ${mb}px;
    & > * {
      padding: ${margin};
    }
  `;
});

export const Col = styled.div<ColProps>((props) => {
  const width = props.span ? (100 * props.span) / 12 + '%' : 'auto';

  return css`
    width: ${width};
    max-width: ${width};
    flex-basis: ${width};
  `;
});
