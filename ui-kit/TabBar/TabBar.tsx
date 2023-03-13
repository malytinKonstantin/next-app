import React, { FC } from 'react';
import * as Styled from './styles';
import { TabBarProps } from './types';

export const TabBar: FC<TabBarProps> = (props) => {
  const { activeTabId, tabs, onTabClick } = props;

  return (
    <Styled.Wrapper>
      {tabs.map((tab) => {
        return (
          <Styled.Tab
            key={tab.id}
            isActive={activeTabId === tab.id}
            notification={tab.notification}
            onClick={() => onTabClick(tab.id)}
          >
            <Styled.TabIcon name={tab.icon} />
            {activeTabId === tab.id && <Styled.ActiveState />}
          </Styled.Tab>
        );
      })}
    </Styled.Wrapper>
  );
};
