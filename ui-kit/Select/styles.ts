import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as IconStyled from '@/ui-kit/Icon/styles';
import { InputBase } from '@/ui-kit/base/InputBase/styles';
import { Icon } from '@/ui-kit/Icon/Icon';
import { UiKitTheme } from '@/ui-kit/@themes';
import { SelectOptionType } from './types';

export const Wrapper = styled.div(() => {
  return css`
    position: relative;

    width: 100%;
    min-height: 40px;
  `;
});

export const Input = styled.input<{ inline?: boolean; multiple?: boolean }>(
  (props) => {
    const InputBaseStyle = InputBase(props);
    return css`
      ${InputBaseStyle.styles}
      margin: ${props.multiple ? 4 : -1}px;
      width: 100%;
    `;
  },
);

export const ToggleButton = styled.button<{
  isOpen: boolean;
  disabled?: boolean;
}>((props) => {
  const { isOpen, disabled, theme } = props;
  const { color, disabledColor } = (theme as UiKitTheme).select.toggle;

  return css`
    position: absolute;
    color: ${disabled ? disabledColor : color};
    top: 0;
    right: 16px;

    height: 100%;

    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    border: none;
    background: transparent;

    line-height: 0;
    ${IconStyled.Wrapper} {
      display: block !important;

      transition: 0.333s;
      transform: rotate(${isOpen ? -90 : 90}deg);
    }
  `;
});

export const Options = styled.div<{ isOpen: boolean }>((props) => {
  const { isOpen, theme } = props;
  const { bg } = (theme as UiKitTheme).select.options;

  return css`
    position: absolute;
    z-index: ${isOpen ? 20 : -10};
    top: calc(100% + 4px);
    right: -1px;
    left: -1px;

    display: ${isOpen ? 'block' : 'none'};
    overflow: scroll;

    height: auto;
    min-height: 60px;
    max-height: 270px;

    transition: 0.23s;
    transform: translateY(${isOpen ? 0 : 80}px);

    opacity: ${isOpen ? 1 : 0};
    border-radius: 16px;
    background: ${bg};
    box-shadow: 0 8px 25px rgb(9 9 10 / 10%);
  `;
});

export const Option = styled.div<
  Pick<SelectOptionType, 'selected' | 'disabled'>
>((props) => {
  const { selected: isSelected, disabled: isDisabled, theme } = props;
  const { color, bg, disabled, selected, hover, active } = (theme as UiKitTheme)
    .select.option;

  return css`
    color: ${isDisabled ? disabled.color : color};

    font-size: 14px;

    margin: 8px;
    padding: 8px 12px;

    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

    background: ${isSelected ? selected.bg : bg};
    border-radius: 8px;

    ${!isDisabled &&
    css`
      &:hover {
        background: ${hover.bg};
      }

      &:active {
        background: ${active.bg};
      }
    `}
  `;
});

export const NoData = styled.div((props) => {
  const { theme } = props;
  const { bg } = (theme as UiKitTheme).select.noData;

  return css`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 60px;

    border-radius: 4px;
    background: ${bg};
  `;
});

export const Item = styled.div(() => {
  return css`
    position: relative;

    display: inline-block;

    padding: 10px;
    padding-right: 40px;

    border-radius: 4px;
  `;
});

export const Spinner = styled(Icon)((props) => {
  const { theme } = props;
  const { stroke } = (theme as UiKitTheme).select.spinner;

  return css`
    svg {
      stroke: ${stroke};
    }
  `;
});

export const Arrow = styled(Icon)`
  svg {
    fill: currentcolor;
  }
`;
