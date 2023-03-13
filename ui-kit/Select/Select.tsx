import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Icon } from '@/ui-kit/Icon';
import { InputBase } from '@/ui-kit/base';
import * as Styled from './styles';
import type { SelectProps, SelectOptionType } from './types';
import { defaultProps } from './Select.defaultProps';

export const Select: React.FC<SelectProps> = (props) => {
  const {
    icon,
    onChange,
    onFocus,
    options = [],
    autocomplete,
    placeholder,
    loading = defaultProps.loading,
    value: initialValue,
    ...rest
  } = props;

  const [value, setValue] = useState<null | string>(initialValue ?? null);
  const inputTextInitial =
    options.find((el) => el.value === props.value)?.caption ?? '';
  const [inputText, setInputText] = useState(inputTextInitial);
  const [isOpen, setIsOpen] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const nextValue = props.value ?? null;

    setValue(nextValue!);

    const inputTextInitial =
      options.find((el) => el.value === props.value)?.caption ?? '';

    setInputText(inputTextInitial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef = useRef<any>();
  const hasInput = autocomplete || onChange;

  const optionsList = options.filter((option) => {
    if (!isFiltered) {
      return true;
    } else {
      return option.caption.toLowerCase().includes(inputText.toLowerCase());
    }
  });

  const handleSelect = async (val: string) => {
    setIsOpen(false);

    const inputValue = options.find((el) => el.value === val)?.caption;
    setInputText(inputValue!);

    await onChange(val);

    setValue(val);

    setIsFiltered(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setInputText(value);
    setIsFiltered(true);
  };

  const showToggleOptions = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsFiltered(false);
    } else {
      inputRef.current.focus();
    }
  };

  const renderOption = (option: SelectOptionType) => {
    let selected;
    if (Array.isArray(value)) {
      selected = value.includes(option.value);
    } else {
      selected = value === option.value;
    }

    const handleOptionClick = option.disabled
      ? undefined
      : async () => {
          await handleSelect(option.value);
        };

    return (
      <Styled.Option
        selected={selected}
        disabled={option.disabled}
        key={option.value}
        onClick={handleOptionClick}
      >
        {option.render ? option.render() : option.caption}
      </Styled.Option>
    );
  };

  return (
    <InputBase {...rest}>
      <Styled.Wrapper onClick={showToggleOptions}>
        {icon && <Icon {...icon} />}
        {hasInput && (
          <Styled.Input
            ref={(ref) => (inputRef.current = ref)}
            type="text"
            readOnly={loading}
            placeholder={placeholder}
            data-value={value}
            onChange={handleChange}
            onFocus={onFocus}
            value={inputText}
            {...rest}
          />
        )}
        <Styled.ToggleButton
          isOpen={isOpen && !props.disabled}
          disabled={props.disabled}
        >
          {loading ? (
            <Styled.Spinner rotate name="spinner" />
          ) : (
            <Styled.Arrow name="rightArrow" />
          )}
        </Styled.ToggleButton>
        <Styled.Options isOpen={isOpen && !props.disabled}>
          {optionsList.length === 0 ? (
            <Styled.NoData>Нет данных</Styled.NoData>
          ) : (
            optionsList.map(renderOption)
          )}
        </Styled.Options>
      </Styled.Wrapper>
    </InputBase>
  );
};
