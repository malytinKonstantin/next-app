import React from 'react';
import * as Styled from './styles';
import { defaultProps } from './SwitcherRow.defaultProps';
import { useDescription } from './hooks/useDescription';
import { SwitcherRowProps } from './types';
import { Switcher } from '@/ui-kit';

export const SwitcherRow: React.FC<SwitcherRowProps> = (props) => {
  const {
    title,
    description,
    switcherProps = defaultProps.switcherProps,
    block,
    mb,
  } = props;
  const { disabled } = switcherProps;

  const Description = useDescription(description);

  return (
    <Styled.Row mb={mb} block={block} disabled={disabled}>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        {description && <Styled.Description>{Description}</Styled.Description>}
      </Styled.Content>
      <Switcher {...switcherProps} />
    </Styled.Row>
  );
};
