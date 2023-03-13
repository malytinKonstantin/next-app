import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBoxRow } from '@/components';
import { defaultProps } from './CheckBoxRow.defaultProps';
import '@/styles/globals.css';

export default {
  title: 'ui-kit/CheckBoxRow',
  component: CheckBoxRow,
  argTypes: {},
} as ComponentMeta<typeof CheckBoxRow>;

const Template: ComponentStory<typeof CheckBoxRow> = (args) => (
  <CheckBoxRow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  checkBoxProps: {
    label: 'Label',
    checked: false,
    error: false,
    disabled: false,
    onChange: () => {
      // noop
    },
  },
};
