import { ReactNode, useMemo } from 'react';
import { TextRowProps } from '../types';

interface UseDescription {
  (description: TextRowProps['description']): ReactNode;
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
