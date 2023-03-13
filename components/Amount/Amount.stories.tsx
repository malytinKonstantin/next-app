import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Amount } from './Amount';
import { defaultProps } from './Amount.defaultProps';
import '@/styles/globals.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/Amount',
  component: Amount,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Amount>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Amount> = (args) => <Amount {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...defaultProps,
};
