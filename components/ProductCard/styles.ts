import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '@/ui-kit/Button';
import { FontFamily } from '@/ui-kit/@constants';
import { UiKitTheme } from '@/ui-kit/@themes';
import { defaultProps } from './ProductCard.defaultProps';
import { ProductCardProps, ProductCardType } from './types';

type typeToStyle = Record<ProductCardType, CSSProperties>;

export const Wrapper = styled.div<Pick<ProductCardProps, 'type'>>((props) => {
  const { type = defaultProps.type, theme } = props;
  const { wrapper } = (theme as UiKitTheme).productCard;

  const typeToStyle: typeToStyle = {
    cart: {
      display: 'flex',
      width: 'auto',
      height: '104px',
      padding: '16px',
      background: wrapper.cart.bg,
      border: wrapper.cart.border,
    },
    default: {
      display: 'block',
      width: '167px',
      height: '320px',
      padding: '0',
      background: wrapper.default.bg,
      border: wrapper.default.border,
    },
  };

  const { display, width, height, padding, background, border } =
    typeToStyle[type!];

  return css`
    position: relative;
    display: ${display};
    width: ${width};
    height: ${height};
    padding: ${padding};
    background: ${background};
    border: ${border};
    border-radius: 24px;
    box-sizing: border-box;
    overflow: hidden;
  `;
});

export const Img = styled.div<Pick<ProductCardProps, 'type' | 'img'>>(
  (props) => {
    const { img, type = defaultProps.type, theme } = props;
    const { bg } = (theme as UiKitTheme).productCard.img;

    const typeToStyle: typeToStyle = {
      cart: {
        width: '72px',
        height: '72px',
        margin: '0 16px 0 0',
        backgroundSize: 'cover',
        borderRadius: '24px',
      },
      default: {
        width: '100%',
        height: '100%',
        margin: '0',
        backgroundSize: 'unset',
        borderRadius: '0',
      },
    };

    const { width, height, margin, backgroundSize, borderRadius } =
      typeToStyle[type!];

    return css`
      width: ${width};
      height: ${height};
      margin: ${margin};
      box-sizing: border-box;
      background-image: url('${img}');
      background-size: ${backgroundSize};
      background-color: ${bg};
      background-repeat: no-repeat;
      border-radius: ${borderRadius};
      box-sizing: border-box;
    `;
  },
);

export const Shadow = styled.div<Pick<ProductCardProps, 'type'>>((props) => {
  const { type, theme } = props;
  const { shadow } = (theme as UiKitTheme).productCard;

  const typeToStyle: typeToStyle = {
    cart: {
      flexDirection: 'row',
      width: 'calc(100% - 100px)',
      height: '100%',
      padding: '0',
      color: shadow.cart.color,
      background: shadow.cart.bg,
    },
    default: {
      flexDirection: 'column',
      width: 'calc(100% + 4px)',
      height: '168px',
      padding: '8px',
      color: shadow.default.color,
      background: shadow.default.bg,
    },
  };

  const { flexDirection, width, height, padding, color, background } =
    typeToStyle[type!];

  const isDefault = type === 'default';

  return css`
    ${isDefault &&
    `
    position: absolute;
    left: -2px;
    bottom: -2px;
  `}
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: space-between;
    width: ${width};
    height: ${height};
    padding: ${padding};
    color: ${color};

    background: ${background};
  `;
});

export const Text = styled.p<Pick<ProductCardProps, 'type'>>((props) => {
  const { type, theme } = props;
  const { text } = (theme as UiKitTheme).productCard;

  const typeToStyle: typeToStyle = {
    cart: {
      color: text.cart.color,
      fontWeight: '700',
      fontSize: '13px',
      lineHeight: '18px',
    },
    default: {
      color: text.default.color,
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '24px',
    },
  };

  const { color, fontWeight, fontSize, lineHeight } = typeToStyle[type!];

  return css`
    margin: 0;
    font-family: ${FontFamily.SFProDisplay};
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: ${color};
  `;
});

export const SubTextWrapper = styled.div(() => {
  return css`
    display: flex;
    align-items: center;
  `;
});

export const SubText = styled.span<Pick<ProductCardProps, 'type'>>((props) => {
  const { type, theme } = props;
  const { color } = (theme as UiKitTheme).productCard.subText;

  const typeToStyle: typeToStyle = {
    cart: {
      margin: '0 0 4px 0',
      fontSize: '12px',
      lineHeight: '18px',
    },
    default: {
      margin: '0',
      fontSize: '16px',
      lineHeight: '24px',
    },
  };

  const { margin, fontSize, lineHeight } = typeToStyle[type!];

  return css`
    margin: ${margin};
    font-family: ${FontFamily.SFProDisplay};
    font-style: normal;
    font-weight: 500;
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: ${color};
  `;
});

export const Separator = styled.div((props) => {
  const { theme } = props;
  const { color } = (theme as UiKitTheme).productCard.subText;

  return css`
    width: 4px;
    height: 4px;

    margin: 0 8px;

    border-radius: 50%;

    background: ${color};
  `;
});

export const CardButtonWrapper = styled.div(() => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
});

export const CardButton = styled(Button)`
  height: 56px;
`;

export const CloseButton = styled.button((props) => {
  const { theme } = props;
  const { fill } = (theme as UiKitTheme).productCard.closeButton;
  return css`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: none;

    > svg,
    path {
      fill: ${fill};
    }
  `;
});
