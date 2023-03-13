import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon, IconProps } from '@/ui-kit';
import { UiKitTheme } from '@/ui-kit/@themes';

interface WrapperProps {
  mb: number;
}
export const Wrapper = styled.div<WrapperProps>((props) => {
  const { mb } = props;

  return css`
    display: inline-block;
    margin-bottom: ${mb}px;
  `;
});

export const Input = styled.input(() => {
  return css`
    display: none;
  `;
});

interface SpinnerProps extends IconProps {
  checked: boolean;
  theme?: UiKitTheme;
}
export const Spinner = styled(Icon)((props: SpinnerProps) => {
  const { checked, theme } = props;
  const { stroke, path } = (theme as UiKitTheme).switcher.spinner;

  const circleBg = checked ? path.checkedStoke : path.stroke;

  return css`
    svg {
      stroke: ${stroke};

      > path:nth-of-type(1) {
        stroke: ${circleBg};
        opacity: 1;
      }
    }
  `;
});

interface KnobProps {
  checked: boolean;
  disabled: boolean;
}
export const Knob = styled.span<KnobProps>((props) => {
  const { checked, disabled: isDisabled, theme } = props;
  const { bg, disabled } = (theme as UiKitTheme).switcher.knob;

  let background = bg;

  if (isDisabled) {
    background = checked ? disabled.checked.bg : disabled.bg;
  }

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2px;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    background-color: ${background};
    border-radius: 14px;
    transition: left 0.2s ease-out, width 0.2s ease-out;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06);
  `;
});

interface LabelProps {
  checked: boolean;
  disabled: boolean;
}

export const Label = styled.label<LabelProps>((props) => {
  const { checked: isChecked, disabled: isDisabled, theme } = props;
  const { bg, checked, disabled } = (theme as UiKitTheme).switcher.label;
  let background = bg;

  if (isChecked) {
    background = checked.bg;
  }

  if (isDisabled) {
    background = isChecked ? disabled.checked.bg : disabled.bg;
  }

  const leftCommon = isChecked ? 'calc(100% - 30px)' : '2px';
  const leftActive = isChecked ? 'calc(100% - 36px)' : '2px';

  const activeStyles = disabled
    ? ''
    : css`
        ${Knob} {
          width: 34px;
          left: ${leftActive};
        }
      `;

  return css`
    position: relative;
    box-sizing: border-box;
    display: block;
    width: 52px;
    height: 32px;
    border-radius: 16px;
    background-color: ${background};
    transition: background-color 0.2s ease-out;
    cursor: pointer;

    ${Knob} {
      left: ${leftCommon};
    }

    &:active {
      ${activeStyles};
    }
  `;
});
