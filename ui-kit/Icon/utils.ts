import { type IconName } from './types';
import { iconsMap } from './constants';

type ImageFile = any;

export const getIconByName = (name: IconName): ImageFile => {
  switch (true) {
    case name in iconsMap.flat:
      return iconsMap.flat[name];

    case name in iconsMap.colored:
      return iconsMap.colored[name];

    case name in iconsMap.emoji:
      return iconsMap.emoji[name];
  }
};

export const getIsVectorImage = (name: IconName): boolean => {
  if (name in iconsMap.emoji) {
    return false;
  }

  return true;
};
