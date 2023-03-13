import { CheckBoxProps } from '@/ui-kit/Checkbox/types';
import { useEffect, useState } from 'react';

export interface UseChangeHandlersProps {
  imperativeChecked: CheckBoxProps['checked'];
  onChange: CheckBoxProps['onChange'];
}

export interface UseChangeHandlersReturn {
  checked: boolean;
  loading: boolean;
  handleChange: () => void;
}

export const useChangeHandlers = (
  props: UseChangeHandlersProps,
): UseChangeHandlersReturn => {
  const { imperativeChecked, onChange } = props;

  const [checked, setChecked] = useState<boolean>(Boolean(imperativeChecked));
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setChecked(Boolean(imperativeChecked));
  }, [imperativeChecked]);

  const handleChange = async () => {
    setLoading(true);
    try {
      if (typeof onChange === 'function') {
        await onChange(!checked);
      }
    } catch {
      setLoading(false);
    }
    setLoading(false);
    setChecked(!checked);
  };

  return {
    checked,
    loading,
    handleChange,
  };
};
