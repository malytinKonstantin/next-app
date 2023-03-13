import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextRow } from './TextRow';
import { defaultProps } from './TextRow.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/TextRow',
  component: TextRow,
  argTypes: {},
} as ComponentMeta<typeof TextRow>;

const Template: ComponentStory<typeof TextRow> = (args) => (
  <TextRow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  title: 'Title',
};
