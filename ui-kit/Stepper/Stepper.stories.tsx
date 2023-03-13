import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stepper } from '@/ui-kit';
import { defaultProps } from './Stepper.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/Stepper',
  component: Stepper,
  argTypes: {},
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
};
