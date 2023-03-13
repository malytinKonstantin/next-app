import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabBar } from './TabBar';
import { Tab } from './types';
import '@/styles/globals.css';

const tabs: Tab[] = [
  {
    icon: 'research',
    id: 'research',
  },
  {
    icon: 'plus',
    id: 'plus',
    notification: 1,
  },
  {
    icon: 'minus',
    id: 'minus',
  },
  {
    icon: 'approveTick',
    id: 'approveTick',
    notification: 99,
  },
  {
    icon: 'warning',
    id: 'warning',
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/TabBar',
  component: TabBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TabBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs,
  activeTabId: 'research',
};
