import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoRow } from './InfoRow';
import { defaultProps } from './InfoRow.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/InfoRow',
  component: InfoRow,
  argTypes: {},
} as ComponentMeta<typeof InfoRow>;

const Template: ComponentStory<typeof InfoRow> = (args) => (
  <InfoRow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  title: 'Title',
};
