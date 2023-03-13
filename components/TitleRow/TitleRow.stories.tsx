import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TitleRow } from './TitleRow';
import { defaultProps } from './TitleRow.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/TitleRow',
  component: TitleRow,
  argTypes: {},
} as ComponentMeta<typeof TitleRow>;

const Template: ComponentStory<typeof TitleRow> = (args) => (
  <TitleRow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
};
