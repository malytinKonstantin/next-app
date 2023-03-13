import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from './SearchBar';
import { defaultProps } from './SearchBar.defaultProps';
import { mock } from './mock';
import '@/styles/globals.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/SearchBar',
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => {
  const [loading, setLoading] = useState(false);
  const search = async () => {
    setLoading(true);
    await mock.search();
    setLoading(false);
  };

  return <SearchBar {...args} loading={loading} search={search} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...defaultProps,
};
