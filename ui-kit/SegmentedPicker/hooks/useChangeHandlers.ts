import {
  ChangeEvent,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  SegmentedPickerItem,
  SegmentedPickerProps,
  SegmentedPickerValue,
} from '@/ui-kit/SegmentedPicker';

interface UseChangeHandlersProps {
  itemRefs: RefObject<HTMLLabelElement>[];
  items: SegmentedPickerItem[];
  defaultValue: SegmentedPickerValue | null;
  onChange: SegmentedPickerProps['onChange'];
}

interface UseChangeHandlersReturn {
  calculatePosition: () => void;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  currentIndex: number | null;
  nextIndex: number | null;
  loading: boolean;
  activeWidth: number;
  activeOffset: number;
}

export const useChangeHandlers = (
  props: UseChangeHandlersProps,
): UseChangeHandlersReturn => {
  const { itemRefs, items, defaultValue, onChange } = props;

  const [currentIndex, setCurrentIndex] = useState<null | number>(() => {
    const index = items.findIndex((it) => it.value === defaultValue);
    if (index >= 0) {
      return index;
    }

    return null;
  });

  const [nextIndex, setNextIndex] = useState<null | number>(null);
  const [width, setWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    const nextValue = evt.currentTarget.value;
    const index = items.findIndex((it) => it.value === nextValue);
    if (index >= 0) {
      setNextIndex(index);
    }

    try {
      if (typeof onChange === 'function') {
        setLoading(true);
        await onChange(nextValue);
      }
      setNextIndex(null);
      setCurrentIndex(index);
      setLoading(false);
    } catch {
      setNextIndex(null);
      setLoading(false);
    }
  };

  const calculatePosition = useCallback(() => {
    if (currentIndex !== null) {
      const node = itemRefs[currentIndex].current;
      if (node) {
        setWidth(node.offsetWidth);
        setOffset(node.offsetLeft);
      }
    }
  }, [currentIndex, itemRefs]);

  useEffect(() => {
    calculatePosition();
  }, [calculatePosition]);

  return {
    calculatePosition,
    handleChange,
    loading,
    nextIndex,
    currentIndex,
    activeWidth: width,
    activeOffset: offset,
  };
};
