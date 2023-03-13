import { ReactNode, useMemo } from 'react';
import { SwitcherRowProps } from '../types';

interface UseDescription {
  (description: SwitcherRowProps['description']): ReactNode;
}
export const useDescription: UseDescription = (description) => {
  return useMemo(() => {
    if (!description) {
      return null;
    }

    if (typeof description === 'function') {
      return description();
    }

    return description;
  }, [description]);
};
