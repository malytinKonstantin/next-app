import React from 'react';
import * as Styled from './styles';
import { useDescription } from './hooks/useDescription';
import { TextRowProps } from './types';

export const TextRow: React.FC<TextRowProps> = (props) => {
  const { title, label, description, disabled, block, mb } = props;
  const Description = useDescription(description);

  return (
    <Styled.Row mb={mb} block={block} disabled={disabled}>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        {label && <Styled.Label>{label}</Styled.Label>}
      </Styled.Header>
      {description && <Styled.Description>{Description}</Styled.Description>}
    </Styled.Row>
  );
};
