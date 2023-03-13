export interface Menuitem {
  id: string;
  path: string;
  title: string;
  subTitle: string;
}

export type MenuId =
  | 'menu-menu'
  | 'menu-points'
  | 'menu-support'
  | 'menu-contacts';

export type Menu = Record<MenuId, Menuitem>;
