import React from 'react';
import { Icon } from '@/ui-kit';
import { defaultProps } from './Info.defaultProps';
import { useDescription } from './hooks/useDescription';
import * as Styled from './styles';
import { InfoProps } from './types';

export const Info: React.FC<InfoProps> = (props) => {
  const {
    title,
    description,
    mb = defaultProps.mb,
    block = defaultProps.block,
    type = defaultProps.type,
  } = props;

  const Description = useDescription(description);

  return (
    <Styled.Row mb={mb} block={block} type={type}>
      <Styled.IconBox type={type}>
        <Icon name="star" width={24} height={24} fill="currentColor" />
      </Styled.IconBox>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        {description && <Styled.Description>{Description}</Styled.Description>}
      </Styled.Content>
    </Styled.Row>
  );
};
