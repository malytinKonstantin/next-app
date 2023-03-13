import React from 'react';
import { Icon } from '@/ui-kit';
import { Action } from '@/ui-kit/base';
import { defaultProps } from './InfoRow.defaultProps';
import { useDescription } from './hooks/useDescription';
import * as Styled from './styles';
import { InfoRowProps } from './types';

export const InfoRow: React.FC<InfoRowProps> = (props) => {
  const {
    title,
    description,
    iconProps,
    actionProps,
    disabled = defaultProps.disabled,
    mb = defaultProps.mb,
    block = defaultProps.block,
  } = props;

  const Description = useDescription(description);

  return (
    <Styled.Row mb={mb} block={block} disabled={disabled}>
      {iconProps && (
        <Styled.IconBox>
          <Icon {...iconProps} width={24} height={24} fill="currentColor" />
        </Styled.IconBox>
      )}
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        {description && <Styled.Description>{Description}</Styled.Description>}
      </Styled.Content>
      {actionProps && <Action {...actionProps} />}
    </Styled.Row>
  );
};
