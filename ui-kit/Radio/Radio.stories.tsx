import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './Radio';
import { defaultProps } from './Radio.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
};
