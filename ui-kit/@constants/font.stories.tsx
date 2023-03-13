import React from 'react';
import { FontFamily } from './font';

export default {
  title: 'constants/fonts',
  component: () => <></>,
};

export const Fonts = () => {
  return (
    <div>
      <p style={{ fontFamily: '"FontFamily.SFPro"' }}>{FontFamily.SFPro}</p>
      <p style={{ fontFamily: '"FontFamily.SFProDisplay"' }}>
        {FontFamily.SFProDisplay}
      </p>
      <p style={{ fontFamily: '"FontFamily.SFProText"' }}>
        {FontFamily.SFProText}
      </p>
    </div>
  );
};
