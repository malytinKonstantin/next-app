import React from 'react';
import { Icon } from '@/ui-kit';
import { defaultProps } from './Spinner.defaultProps';
import * as Styled from './styles';
import type { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const {
    fill = defaultProps.fill,
    size = defaultProps.size,
    mb = defaultProps.mb,
  } = props;

  return (
    <Styled.Wrapper fill={fill}>
      <Icon rotate name="spinner" width={size} height={size} mb={mb} />
    </Styled.Wrapper>
  );
};
