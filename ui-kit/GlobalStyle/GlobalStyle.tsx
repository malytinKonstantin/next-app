import React from 'react';
import { useTheme, Global } from '@emotion/react';
import { UiKitTheme } from '@/ui-kit/@themes/types';

export const GlobalStyles = () => {
  const theme = useTheme() as UiKitTheme;

  return <Global styles={theme.global} />;
};
