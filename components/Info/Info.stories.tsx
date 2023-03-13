import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Info } from './Info';
import { defaultProps } from './Info.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/Info',
  component: Info,
  argTypes: {},
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  title: 'Title',
};
