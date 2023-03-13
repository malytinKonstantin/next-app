import { CSSObject, SerializedStyles } from '@emotion/react';
import { ButtonType } from '@/ui-kit/Button';
import { InfoType, ProductCardType } from '@/components';
import { ComponentSize } from '../@types';
import { InputState } from '../base/InputBase/constants';
import { CSSProperties } from '@emotion/serialize';
import { PropertiesFallback } from 'csstype';

type OverwriteStyles = { styles?: CSSObject };

// #region Button
type ButtonTypeTheme = Record<
  ButtonType,
  {
    normal: {
      color: string;
      backgroundColor: string;
      borderColor: string;
    };

    loading: {
      color: string;
      backgroundColor: string;
      borderColor: string;
    };

    hover: {
      color: string;
      backgroundColor: string;
      borderColor: string;
    };

    active: {
      color: string;
      backgroundColor: string;
      borderColor: string;
    };
  }
>;

export type ButtonSpinTheme = Record<
  ButtonType,
  {
    border: {
      color: string;
    };
    borderLeft: {
      color: string;
    };
  }
>;

export interface ButtonTheme extends ButtonTypeTheme, OverwriteStyles {
  fontFamily: string;
  disabled: {
    color: string;
    backgroundColor: string;
    borderColor: string;
  };
  spin: ButtonSpinTheme;
  [ComponentSize.small]: {
    [ButtonType.danger]: {
      hover: {
        color: string;
      };
      disabled: {
        color: string;
      };
    };
    [ButtonType.ghost]: {
      normal: {
        borderColor: string;
      };
    };
  };
}
// #endregion

// #region CheckBox
export interface CheckBoxLabelTheme {
  borderColor: {
    disabled: string;
    checked: string;
    error: string;
    normal: string;
  };

  color: {
    disabled: string;
    error: string;
    normal: string;
  };
}

export interface CheckBoxBoxTheme {
  bgColor: {
    disabled: string;
    checked: string;
    error: string;
    normal: string;
  };

  tickColor: {
    error: string;
    disabledChecked: string;
    normal: string;
  };

  indeterminateColor: {
    disabled: string;
    error: string;
    normal: string;
  };
}

export interface CheckBoxTheme {
  label: CheckBoxLabelTheme;
  box: CheckBoxBoxTheme;
}
// #endregion

// #region Dialog
export interface DialogTheme {
  bgColor: string;
}
// #endregion

// #region Divider
export interface DividerTheme {
  bgColor: string;
}
// #endregion

// #region Drawer
export interface DrawerTheme {
  bg: string;
}
// #endregion

// #region InputBase
export type InputBaseMessage = Record<InputState, { color: string }>;

export interface InputBaseLabelTheme extends OverwriteStyles {
  color: string;
  requiredColor: string;
  fontFamily: string;
}

export type InputBaseInputTheme = {
  fontFamily: string;
} & Record<
  InputState,
  {
    color: string;
    borderColor: string;
    bg: string;
    placeholderColor: string;

    hover: {
      backgroundColor: string;
      bg: string;
    };
    focus: {
      color: string;
      bg: string;
    };
  } & OverwriteStyles
>;

export interface InputBaseTheme {
  input: InputBaseInputTheme;
  label: InputBaseLabelTheme;
  message: InputBaseMessage;
}
// #endregion

// #region Modal
export interface ModalTheme {
  bg: string;
  buttonFill: string;
}
// #endregion

// #region SegmentedPicker
export interface SegmentedPickerOptionTheme {
  label: {
    bg: string;
  };
  spinner: {
    stroke: string;
  };
  text: {
    color: string;
    disabled: {
      color: string;
    };
    hover: {
      color: string;
      bg: string;
      bgChecked: string;
    };
    active: {
      color: string;
      bg: string;
      bgChecked: string;
    };
  };
}

export interface SegmentedPickerTheme {
  bg: string;
  option: SegmentedPickerOptionTheme;
}
// #endregion

// #region Selects
export interface SelectsToggleTheme {
  color: string;
  disabledColor: string;
}

export interface SelectsOptionsTheme {
  bg: string;
}

export interface SelectsNoDataTheme {
  bg: string;
}

export interface SelectsOptionTheme {
  color: string;
  bg: string;
  disabled: {
    color: string;
  };
  hover: {
    bg: string;
  };
  active: {
    bg: string;
  };
  selected: {
    bg: string;
  };
}

export interface SelectsSpinnerTheme {
  stroke: string;
}

export interface SelectsTheme {
  toggle: SelectsToggleTheme;
  options: SelectsOptionsTheme;
  option: SelectsOptionTheme;
  noData: SelectsNoDataTheme;
  spinner: SelectsSpinnerTheme;
}
// #endregion

// #region Stepper
export interface StepperButtonTheme {
  color: string;
  bg: string;
  loading: {
    bg: string;
  };
  disabled: {
    color: string;
  };
  hover: {
    color: string;
  };
  active: {
    color: string;
    bg: string;
  };
}

export interface StepperTheme {
  wrapper: { border: { color: string } };
  spinner: { stroke: string };
  button: StepperButtonTheme;
}
// #endregion

// #region Switcher
export interface SwitcherSpinnerTheme {
  stroke: string;
  path: {
    stroke: string;
    checkedStoke: string;
  };
}

export interface SwitcherKnobTheme {
  bg: string;
  disabled: {
    bg: string;
    checked: {
      bg: string;
    };
  };
}

export interface SwitcherLabelTheme {
  bg: string;
  checked: {
    bg: string;
  };
  disabled: {
    bg: string;
    checked: {
      bg: string;
    };
  };
}

export interface SwitcherTheme {
  spinner: SwitcherSpinnerTheme;
  knob: SwitcherKnobTheme;
  label: SwitcherLabelTheme;
}
// #endregion

// #region Title
export interface TitleTheme {
  color: string;
}
// #endregion

// #region Amount
export interface AmountTheme {
  disabled: {
    color: string;
    bg: string;
  };
  oldValue: {
    color: string;
  };
}
// #endregion

// #region CheckBoxRow
export interface CheckBoxRowRowTheme {
  normal: {
    color: string;
    bg: string;
  };
  error: {
    bg: string;
  };
  disabled: {
    color: string;
  };
}

export interface CheckBoxRowPriceTheme {
  normal: {
    bg: string;
  };
  disabled: {
    bg: string;
  };
}

export interface CheckBoxRowTheme {
  row: CheckBoxRowRowTheme;
  price: CheckBoxRowPriceTheme;
}
// #endregion

// #region Title
export interface TabBarWrapperTheme {
  color: string;
  bg: string;
}

export interface TabBarTabTheme {
  color: string;
  activeColor: string;
  notification: {
    color: string;
    bg: string;
  };
  hover: {
    color: string;
  };
  active: {
    color: string;
    bg: string;
  };
}

export interface ActiveStateTheme {
  bg: string;
}

export interface TabBarTheme {
  wrapper: TabBarWrapperTheme;
  tab: TabBarTabTheme;
  activeState: ActiveStateTheme;
}
// #endregion

// #region Info
export interface InfoInfoBoxTheme {
  color: string;
  bg: Record<keyof typeof InfoType, string>;
}

export interface InfoTitleTheme {
  color: string;
}

export interface InfoDescriptionTheme {
  color: string;
}

export interface InfoTheme {
  row: Record<keyof typeof InfoType, string>;
  infoBox: InfoInfoBoxTheme;
  title: InfoTitleTheme;
  description: InfoDescriptionTheme;
}
// #endregion

// #region InfoRow
export interface InfoRowTheme {
  row: {
    color: string;
    disabledColor: string;
  };
  iconBox: {
    color: string;
  };
  description: {
    color: string;
  };
}
// #endregion

// #region ProductCard
export type ProductCardWrapperTheme = Record<
  ProductCardType,
  {
    bg: string;
    border: string;
  }
>;

export interface ProductCardImgTheme {
  bg: string;
}

export type ProductCardShadowTheme = Record<
  ProductCardType,
  {
    color: string;
    bg: string;
  }
>;

export type ProductCardTextTheme = Record<
  ProductCardType,
  {
    color: string;
  }
>;

export interface ProductCardSubTextTheme {
  color: string;
}

export interface ProductCardSeparatorTheme {
  bg: string;
}

export interface ProductCardCloseButtonTheme {
  fill: string;
}

export interface ProductCardTheme {
  wrapper: ProductCardWrapperTheme;
  img: ProductCardImgTheme;
  shadow: ProductCardShadowTheme;
  text: ProductCardTextTheme;
  subText: ProductCardSubTextTheme;
  separator: ProductCardSeparatorTheme;
  closeButton: ProductCardCloseButtonTheme;
}
// #endregion

// #region NavBar
export interface NavBarTheme {
  centerButton: {
    color: string;
    fill: string;
  };
  caption: {
    color: string;
  };
  iconWrapper: {
    bg: string;
  };
  title: {
    color: string;
  };
}
// #endregion

// #region TextRow
export interface TextRowTheme {
  row: {
    color: string;
    disabledColor: string;
  };
  description: {
    color: string;
  };
}
// #endregion

// #region TitleRow
export interface TitleRowTheme {
  title: {
    color: string;
  };
  row: {
    color: string;
  };
}
// #endregion

// #region SwitcherRow
export interface SwitcherRowTheme {
  row: {
    color: string;
    disabledColor: string;
  };
  description: {
    color: string;
  };
}
// #endregion

export interface UiKitTheme {
  // Ui-Kit
  button: ButtonTheme;
  checkBox: CheckBoxTheme;
  dialog: DialogTheme;
  divider: DividerTheme;
  drawer: DrawerTheme;
  inputBase: InputBaseTheme;
  modal: ModalTheme;
  segmentedPicker: SegmentedPickerTheme;
  select: SelectsTheme;
  stepper: StepperTheme;
  switcher: SwitcherTheme;
  tabBar: TabBarTheme;
  title: TitleTheme;
  // Components
  amount: AmountTheme;
  checkBoxRow: CheckBoxRowTheme;
  info: InfoTheme;
  infoRow: InfoRowTheme;
  navBar: NavBarTheme;
  productCard: ProductCardTheme;
  textRow: TextRowTheme;
  switcherRow: SwitcherRowTheme;
  titleRow: TitleRowTheme;
  global: SerializedStyles;
}
