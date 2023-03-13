import React from 'react';
import * as Styled from './styles';
import { OptionProps } from './types';

export const Option = React.forwardRef<HTMLLabelElement, OptionProps>(
  (props, ref) => {
    const {
      item,
      onChange,
      selfIndex,
      checkedIndex,
      nextIndex,
      loading,
      disabled,
      justify,
      totalItems,
    } = props;

    const checked = selfIndex === checkedIndex;
    const isNextToCheckedOrFirst =
      selfIndex === 0 ||
      (checkedIndex !== null && checkedIndex + 1 === selfIndex);

    const isLoaderShown = loading && nextIndex === selfIndex;

    return (
      <Styled.Label
        ref={ref}
        checked={checked}
        selfIndex={selfIndex}
        checkedIndex={checkedIndex}
        justify={justify}
        totalItems={totalItems}
      >
        <input
          type="radio"
          value={item.value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <Styled.Text
          isNextToCheckedOrFirst={isNextToCheckedOrFirst}
          disabled={disabled}
          checked={checked}
          isLoaderShown={isLoaderShown}
        >
          {isLoaderShown && (
            <Styled.Spinner rotate name="spinner" width={24} height={24} />
          )}
          <span>
            {item.label}
            <Styled.ShadowText text={item.label} />
          </span>
        </Styled.Text>
      </Styled.Label>
    );
  },
);
