import React, { FC, useState } from 'react';
import { SearchBar } from './SearchBar';
import { mock } from './mock';
import { defaultProps } from './SearchBar.defaultProps';

export const DemoSearchBars: FC = () => {
  const [loading, setLoading] = useState(false);
  const search = async () => {
    setLoading(true);
    await mock.search();
    setLoading(false);
  };

  return (
    <div style={{ padding: ' 0 0 20px' }}>
      <SearchBar loading={loading} delay={defaultProps.delay} search={search} />
    </div>
  );
};
