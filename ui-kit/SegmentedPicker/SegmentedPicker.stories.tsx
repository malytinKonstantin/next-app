import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SegmentedPicker } from '@/ui-kit';
import { defaultProps } from './SegmentedPicker.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/SegmentedPicker',
  component: SegmentedPicker,
  argTypes: {},
} as ComponentMeta<typeof SegmentedPicker>;

const Template: ComponentStory<typeof SegmentedPicker> = (args) => (
  <SegmentedPicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  defaultValue: 'value1',
  items: [
    { value: 'value1', label: 'some value1' },
    { value: 'value2', label: 'some value2' },
    { value: 'value3', label: 'some value3' },
    { value: 'value4', label: 'some value4' },
  ],
};
