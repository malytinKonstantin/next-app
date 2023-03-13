import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';
import '@/styles/globals.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/NavBar',
  component: NavBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NavBarWithIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBarWithIconButton.args = {
  leftButton: {
    rightIcon: {
      name: 'rightArrow',
      iconStyles: {
        rotate: '180deg',
      },
    },
  },
  rightButton: {
    rightIcon: {
      name: 'rightArrow',
    },
  },
  title: 'Title',
};

export const NavBarWithIconTextButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBarWithIconTextButton.args = {
  leftButton: {
    caption: 'Back',
    leftIcon: {
      name: 'rightArrow',
      iconStyles: {
        rotate: '180deg',
      },
    },
  },
  rightButton: {
    caption: 'Next',
    rightIcon: {
      name: 'rightArrow',
    },
  },
  title: 'Title',
};

export const NavBarWithRightIconLeftButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBarWithRightIconLeftButton.args = {
  leftButton: {
    caption: 'Delete',
    rightIcon: {
      name: 'close',
    },
  },
  title: 'Title',
};

export const NavBarWithLeftIconRightButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBarWithLeftIconRightButton.args = {
  rightButton: {
    caption: 'Insert',
    leftIcon: {
      name: 'plus',
    },
  },
  title: 'Title',
};

export const NavBarWithCenterButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBarWithCenterButton.args = {
  centerButton: {
    caption: 'Address',
    rightIcon: {
      name: 'rightArrow',
    },
  },
  title: 'Title',
};

export const NavBarWithAllButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBarWithAllButton.args = {
  leftButton: {
    caption: 'Back',
    leftIcon: {
      name: 'rightArrow',
      iconStyles: {
        rotate: '180deg',
      },
    },
  },
  rightButton: {
    caption: 'Next',
    rightIcon: {
      name: 'rightArrow',
    },
  },
  centerButton: {
    caption: 'Address',
    rightIcon: {
      name: 'rightArrow',
    },
  },
  title: 'Title',
};
