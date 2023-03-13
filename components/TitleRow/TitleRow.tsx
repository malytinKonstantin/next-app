import React from 'react';
import { Title } from '@/ui-kit';
import { Action } from '@/ui-kit/base';
import { defaultProps } from './TitleRow.defaultProps';
import * as Styled from './styles';
import { TitleRowProps } from './types';

export const TitleRow: React.FC<TitleRowProps> = (props) => {
  const {
    title,
    actionProps,
    level,
    mb = defaultProps.mb,
    block = defaultProps.block,
  } = props;

  return (
    <Styled.Row mb={mb} block={block}>
      <Title level={level}>{title}</Title>
      {actionProps && <Action {...actionProps} />}
    </Styled.Row>
  );
};
