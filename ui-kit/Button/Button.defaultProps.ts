import { ButtonType } from './types';
import { ComponentSize } from '@/ui-kit/@types';

export const defaultProps = {
  type: ButtonType.primary,
  size: ComponentSize.middle,
  disabled: false,
  block: false,
  loading: false,
  mb: 0,
};
