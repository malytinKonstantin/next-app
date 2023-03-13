import { IconNameEnum } from './types';
import ApproveTick from '@/public/icons/flat/ApproveTick.svg';
import CloseFill from '@/public/icons/flat/Close Fill.svg';
import Close from '@/public/icons/flat/Close.svg';
import Minus from '@/public/icons/flat/Minus.svg';
import Plus from '@/public/icons/flat/Plus.svg';
import Research from '@/public/icons/flat/Research.svg';
import RightArrow from '@/public/icons/flat/right arrow.svg';
import Spinner from '@/public/icons/flat/Spinner.svg';
import Warning from '@/public/icons/flat/Warning.svg';
import Star from '@/public/icons/flat/Star.svg';

import CheckGreen from '@/public/icons/colored/CheckGreen.svg';
import CloseRed from '@/public/icons/colored/CloseRed.svg';
import WarningYellow from '@/public/icons/colored/WarningYellow.svg';

import Sushi from '@/public/icons/emoji/Sushi.png';
import Pizza from '@/public/icons/emoji/Pizza.png';
import HotBeverage from '@/public/icons/emoji/HotBeverage.png';
import Hamburger from '@/public/icons/emoji/Hamburger.png';
import GreenApple from '@/public/icons/emoji/GreenApple.png';
import FrenchFries from '@/public/icons/emoji/FrenchFries.png';

export const iconsMap = {
  flat: {
    [IconNameEnum.approveTick]: ApproveTick,
    [IconNameEnum.closeFill]: CloseFill,
    [IconNameEnum.close]: Close,
    [IconNameEnum.minus]: Minus,
    [IconNameEnum.plus]: Plus,
    [IconNameEnum.research]: Research,
    [IconNameEnum.rightArrow]: RightArrow,
    [IconNameEnum.spinner]: Spinner,
    [IconNameEnum.warning]: Warning,
    [IconNameEnum.star]: Star,
  },

  colored: {
    [IconNameEnum.checkGreen]: CheckGreen,
    [IconNameEnum.closeRed]: CloseRed,
    [IconNameEnum.warningYellow]: WarningYellow,
  },

  emoji: {
    [IconNameEnum.sushi]: Sushi,
    [IconNameEnum.pizza]: Pizza,
    [IconNameEnum.hotBeverage]: HotBeverage,
    [IconNameEnum.hamburger]: Hamburger,
    [IconNameEnum.greenApple]: GreenApple,
    [IconNameEnum.frenchFries]: FrenchFries,
  },
};
