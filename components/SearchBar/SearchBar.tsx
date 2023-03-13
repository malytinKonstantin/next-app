import React, { FC, useState, ChangeEvent, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { Color } from '@/ui-kit/@constants';
import { Input } from '@/ui-kit/Input';
import { Spinner } from '@/components/Spinner';
import { defaultProps } from './SearchBar.defaultProps';
import { SerachBarProps } from './types';

export const SearchBar: FC<SerachBarProps> = (props) => {
  const {
    delay = defaultProps.delay,
    search,
    loading = defaultProps.loading,
  } = props;
  const [value, setValue] = useState('');

  const debounceSearch = debounce(search, delay);

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    debounceSearch(evt.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearValue = useCallback(() => setValue(''), []);

  return (
    <Input
      value={value}
      leftButton={{
        icon: 'research',
      }}
      rightButton={{
        icon: 'closeFill',
        onClick: clearValue,
        children: loading ? (
          <Spinner size={24} fill={Color.foodCity.Black_Oven_35} />
        ) : null,
      }}
      onChange={handleChange}
    />
  );
};
