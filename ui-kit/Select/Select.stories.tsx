import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';
import { mock } from './mock';
import '@/styles/globals.css';

const delay = (ms: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => {
  const [loading, setLoading] = useState(false);

  const handleChangeAsync = async (val: string) => {
    setLoading(true);
    await delay(700);
    setLoading(false);
    console.log('onChange val', val);
  };

  return (
    <div>
      <Select {...args} label={args.label || 'Select sync'} />
      <Select
        {...args}
        loading={loading}
        label={args.label || 'Select async'}
        onChange={handleChangeAsync}
      />
      <Select
        {...args}
        label="No data"
        options={[]}
        onChange={handleChangeAsync}
      />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...mock,
};
