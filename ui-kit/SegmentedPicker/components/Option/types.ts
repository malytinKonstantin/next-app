import { ChangeEvent } from 'react';
import { JustifyType, SegmentedPickerItem } from '@/ui-kit/SegmentedPicker';

export interface OptionProps {
  item: SegmentedPickerItem;
  selfIndex: number;
  checkedIndex: number | null;
  nextIndex: number | null;
  loading: boolean;
  justify: keyof typeof JustifyType;
  totalItems: number;
  disabled: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}
