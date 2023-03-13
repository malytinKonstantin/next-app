import React from 'react';
import type { ButtonProps } from './types';
import * as Styled from './styles';
import { defaultProps } from './Button.defaultProps';
import { Icon } from '@/ui-kit';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    onClick,
    children,
    loading = defaultProps.loading,
    size = defaultProps.size,
    icon,
    iconProps,
    type = defaultProps.type,
    ...rest
  } = props;

  return (
    <Styled.Button
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type={type}
      size={size}
      isLoading={loading}
      onClick={onClick}
      {...rest}
    >
      <Styled.Spin size={size} isLoading={loading} type={type} icon={icon}>
        <span />
      </Styled.Spin>
      {!loading && icon && <Icon name={icon} {...iconProps} />}
      {children}
    </Styled.Button>
  );
};
