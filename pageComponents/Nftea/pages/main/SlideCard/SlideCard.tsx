import React, { FC } from 'react';
import * as Styled from './styles';
import { SlideCardProps } from './types';

export const SlideCard: FC<SlideCardProps> = (props) => {
  const { img, title, ...rest } = props;

  return (
    <Styled.Card img={img} {...rest}>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Card>
  );
};
