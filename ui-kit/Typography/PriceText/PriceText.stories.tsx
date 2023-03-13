import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PriceText } from './PriceText';
import { defaultProps } from './PriceText.defaultProps';
import '@/styles/globals.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/PriceText',
  component: PriceText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PriceText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PriceText> = (args) => (
  <PriceText {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...defaultProps,
};
