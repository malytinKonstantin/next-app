import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IconNameEnum } from '@/ui-kit/Icon/types';

type TabId = string;

export interface Tab {
  id: TabId;
  icon: keyof typeof IconNameEnum;
  notification?: number | string;
}

export interface TabBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeTabId: TabId;
  /** список элементов */
  tabs: Tab[];
  onTabClick: (value: string) => void;
}
