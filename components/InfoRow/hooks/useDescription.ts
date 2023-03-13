import { ReactNode, useMemo } from 'react';
import { InfoRowProps } from '../types';

interface UseDescription {
  (description: InfoRowProps['description']): ReactNode;
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
