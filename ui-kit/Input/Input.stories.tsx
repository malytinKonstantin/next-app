import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ValidationStatus } from '@/ui-kit/base';
import { Input } from './Input';
import { defaultProps } from './Input.defaultProps';
import '@/styles/globals.css';

const validationSuccess = {
  status: ValidationStatus.success,
  message: 'Success messages text goes here',
};

const validationError = {
  status: ValidationStatus.error,
  message: 'Error messages text goes here',
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <div>
    <Input {...args} />
    <Input {...args} label="Success input" validation={validationSuccess} />
    <Input {...args} label="Error input" validation={validationError} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...defaultProps,
};
