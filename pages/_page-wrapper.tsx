import React from 'react';
import { observer } from 'mobx-react';
import { modalStore } from '@/ui-kit/base';
import styled from '@emotion/styled';

const Wrapper = styled.div<{ isBlur: boolean }>`
  filter: blur(${(props) => (props.isBlur ? '2px' : '0px')});
  transition: 0.3s;
`;

export const PageWrapper: React.FC<{ children: React.ReactNode }> = observer(
  (props) => {
    return <Wrapper isBlur={modalStore.isOpen}>{props.children}</Wrapper>;
  },
);

export default PageWrapper;
