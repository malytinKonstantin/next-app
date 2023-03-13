import { TitleRowProps } from '@/components/TitleRow/types';

export const defaultProps: TitleRowProps = {
  title: 'Title',
  actionProps: {
    label: 'Action',
    disabled: true,
    onClick: () => {
      //noop
    },
  },
  level: 2,
  block: true,
  mb: 0,
};
