import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { IconProps } from './types';
import { iconsMap } from './constants';
import { Color } from '@/ui-kit/@constants';

export default {
  title: 'ui-kit/Icon',
  component: Icon,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Spinner = Template.bind({});

Spinner.args = {
  name: 'spinner',
  width: 48,
  height: 48,
  mb: 15,
  rotate: true,
  iconStyles: {
    stroke: Color.foodCity.Black_Oven,
    strokeWidth: 2,
  },
};

export const AllIcons: ComponentStory<typeof Icon> = (args) => {
  return (
    <div>
      {Object.keys(iconsMap).map((group) => {
        return (
          <div key={group}>
            <h3>{group}</h3>
            <div style={{ display: 'flex' }}>
              {Object.keys(iconsMap[group]).map((name) => {
                const fill = Color.foodCity.Black_Oven;
                const padding = 15;
                const iconWrapperStyles = {
                  display: 'flex',
                  justifyContent: 'center',
                };

                if (name === 'spinner') {
                  return (
                    <div style={{ padding }} key={name}>
                      <div style={iconWrapperStyles}>
                        <Icon
                          {...args}
                          name={name as IconProps['name']}
                          rotate
                          iconStyles={{
                            stroke: fill,
                            strokeWidth: 2,
                          }}
                        />
                      </div>
                      <div>{name}</div>
                    </div>
                  );
                }

                return (
                  <div style={{ padding }} key={name}>
                    <div style={iconWrapperStyles}>
                      <Icon
                        {...args}
                        name={name as IconProps['name']}
                        fill={fill}
                      />
                    </div>
                    <div>{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

AllIcons.args = {
  width: 48,
  height: 48,
  mb: 15,
};
