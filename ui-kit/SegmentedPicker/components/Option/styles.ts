import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontFamily, FontWeight } from '@/ui-kit/@constants/font';
import { Icon, JustifyType } from '@/ui-kit';
import { OptionProps } from '@/ui-kit/SegmentedPicker/components/Option/types';
import { UiKitTheme } from '@/ui-kit/@themes';

type LabelProps = Pick<
  OptionProps,
  'selfIndex' | 'justify' | 'totalItems' | 'checkedIndex'
> & {
  checked: boolean;
};

export const Label = styled.label<LabelProps>((props) => {
  const { checked, selfIndex, checkedIndex, justify, totalItems, theme } =
    props;
  const fontWeight = checked ? FontWeight.w600 : FontWeight.w500;
  const { bg } = (theme as UiKitTheme).segmentedPicker.option.label;

  const isBeforeChecked = checkedIndex && checkedIndex - 1 === selfIndex;
  const delimiterOpacity = isBeforeChecked ? 0 : 1;
  const width = justify === JustifyType.even ? `${100 / totalItems}%` : 'auto';

  return css`
    position: relative;

    flex-grow: 1;
    width: ${width};
    cursor: pointer;
    text-align: center;
    letter-spacing: -0.006em;

    font-family: ${FontFamily.SFProText};
    font-size: 13px;
    font-weight: ${fontWeight};
    line-height: 20px;
    border-radius: 7px;
    transition: color 0.2s ease-out;

    input {
      display: none;
    }

    &:not(:last-child)::after {
      position: absolute;
      z-index: -2;
      top: 6px;
      right: 1px;
      bottom: 6px;
      opacity: ${delimiterOpacity};

      width: 1px;

      content: '';

      border-radius: 0.5px;
      background-color: ${bg};
    }
  `;
});

interface ShadowTextProps {
  text: string;
}
export const ShadowText = styled.span<ShadowTextProps>((props) => {
  const { text } = props;

  return css`
    display: block;
    visibility: hidden;
    overflow: hidden;

    height: 0;

    content: '${text}';

    color: transparent;

    font-weight: ${FontWeight.w600};
  `;
});

interface TextProps {
  isNextToCheckedOrFirst: boolean;
  disabled: boolean;
  checked: boolean;
  isLoaderShown: boolean;
}

export const Text = styled.div<TextProps>((props) => {
  const {
    isNextToCheckedOrFirst,
    disabled: isDisabled,
    checked,
    isLoaderShown,
    theme,
  } = props;
  const {
    color: textColor,
    disabled,
    hover,
    active,
  } = (theme as UiKitTheme).segmentedPicker.option.text;

  const hoveredStyles = isDisabled
    ? ''
    : css`
        color: ${hover.color};

        &::before {
          opacity: 1;
          background-color: ${checked ? hover.bgChecked : hover.bg};
        }
      `;

  const activeStyles = isDisabled
    ? ''
    : css`
        color: ${active.color};

        &::before {
          opacity: 1;
          background-color: ${checked ? active.bgChecked : active.bg};
        }
      `;

  const color = isDisabled ? disabled.color : textColor;

  return css`
    z-index: 0;
    display: flex;
    height: 28px;
    align-items: center;
    justify-content: center;
    padding: 0 ${isLoaderShown ? 12 : 27}px;
    color: ${color};

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${isNextToCheckedOrFirst ? 0 : -2}px;
      right: 0;
      display: ${isDisabled ? 'none' : 'block'};
      border-radius: 7px;
      transition: opacity, background-color 0.2s ease-out;
    }

    &:hover {
      ${hoveredStyles};
    }

    &:active {
      ${activeStyles};
    }
  `;
});

export const Spinner = styled(Icon)((props) => {
  const { theme } = props;
  const { stroke } = (theme as UiKitTheme).segmentedPicker.option.spinner;
  return css`
    margin-right: 6px;

    svg {
      stroke: ${stroke};
    }
  `;
});
