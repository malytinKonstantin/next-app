import React, { PropsWithChildren } from 'react';
import * as Styled from './styles';
import { RowProps } from './types';
import { defaultProps } from '@/ui-kit/base/Row/Row.defaultProps';

export const Row: React.FC<PropsWithChildren<RowProps>> = (props) => {
  const {
    mb = defaultProps.mb,
    className,
    children,
    block = defaultProps.block,
  } = props;

  return (
    <Styled.Row className={className} mb={mb} block={block}>
      {children}
    </Styled.Row>
  );
};
