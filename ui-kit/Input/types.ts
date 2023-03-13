import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
  RefObject,
} from 'react';
import { IconNameEnum } from '@/ui-kit/Icon';
import { InputBaseProps } from '@/ui-kit/base';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: keyof typeof IconNameEnum;
}

type InputHtmlProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends InputBaseProps, InputHtmlProps {
  /** значение Input */
  value?: string;

  /** placeholder */
  placeholder?: string;

  forwardRef?: RefObject<HTMLInputElement>;

  /** кнопка слева */
  leftButton?: ButtonProps;

  /** кнопка справа */
  rightButton?: ButtonProps;
}
