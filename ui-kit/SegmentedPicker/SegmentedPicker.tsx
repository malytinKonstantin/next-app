import React from 'react';
import type { SegmentedPickerProps } from './types';
import { Option } from './components';
import * as Styled from '@/ui-kit/SegmentedPicker/styles';
import {
  useChangeHandlers,
  useRefs,
  useResizeEvent,
} from '@/ui-kit/SegmentedPicker/hooks';
import { defaultProps } from './SegmentedPicker.defaultProps';

export const SegmentedPicker: React.FC<SegmentedPickerProps> = (props) => {
  const {
    items,
    defaultValue = defaultProps.defaultValue,
    block = defaultProps.block,
    justify = defaultProps.justify,
    mb = defaultProps.mb,
    onChange,
  } = props;

  const itemRefs = useRefs(items);

  const {
    currentIndex,
    nextIndex,
    activeWidth,
    activeOffset,
    loading,
    handleChange,
    calculatePosition,
  } = useChangeHandlers({
    items,
    defaultValue,
    itemRefs,
    onChange,
  });

  useResizeEvent(calculatePosition);

  return (
    <Styled.Wrapper
      activeWidth={activeWidth}
      activeOffset={activeOffset}
      block={block}
      mb={mb}
    >
      <Styled.Slider />
      {items.map((item, index) => {
        const disabled = item.disabled || loading;

        return (
          <Option
            ref={itemRefs[index]}
            key={item.value}
            item={item}
            checkedIndex={currentIndex}
            disabled={disabled}
            selfIndex={index}
            totalItems={items.length}
            justify={justify}
            onChange={handleChange}
            loading={loading}
            nextIndex={nextIndex}
          />
        );
      })}
    </Styled.Wrapper>
  );
};
