import React, { useState } from 'react';
import { TabBar } from './TabBar';
import { Tab } from './types';

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

export const DemoTabBars = () => {
  const [activeId, setActiveId] = useState('research');

  return (
    <TabBar
      activeTabId={activeId}
      tabs={tabs}
      onTabClick={(id) => {
        setActiveId(id);
      }}
    />
  );
};
