import { ReactNode, useMemo } from 'react';
import { InfoProps } from '../types';

interface UseDescription {
  (description: InfoProps['description']): ReactNode;
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
