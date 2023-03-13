import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwitcherRow } from './SwitcherRow';
import { defaultProps } from './SwitcherRow.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/SwitcherRow',
  component: SwitcherRow,
  argTypes: {},
} as ComponentMeta<typeof SwitcherRow>;

const Template: ComponentStory<typeof SwitcherRow> = (args) => (
  <SwitcherRow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  title: 'Title',
};
