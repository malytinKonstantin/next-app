import React from 'react';
import type { IconProps } from './types';
import * as Styled from './styles';
import * as iconUtils from './utils';

export const Icon: React.FC<IconProps> = (props) => {
  const {
    name,
    width = 24,
    height = 24,
    fill,
    iconStyles,
    rotate = false,
    className,
    mb,
  } = props;

  if (iconUtils.getIsVectorImage(name)) {
    const Svg = iconUtils.getIconByName(name);

    return (
      <Styled.Wrapper isRotate={rotate} mb={mb} className={className}>
        <Svg width={width} height={height} style={{ fill, ...iconStyles }} />
      </Styled.Wrapper>
    );
  }

  const image = iconUtils.getIconByName(name);

  return (
    <Styled.Wrapper isRotate={rotate} mb={mb} className={className}>
      <img
        {...{
          src: image?.src ?? image,
          alt: '',
          style: {
            width,
            height,
            ...iconStyles,
          },
        }}
      />
    </Styled.Wrapper>
  );
};
