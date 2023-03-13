import React from 'react';
import { Color } from './color';

export default {
  title: 'constants/colors',
  component: () => <div>123</div>,
};

export const Colors = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(Color).map((key) => {
        return (
          <div style={{ margin: 15 }}>
            <div
              style={{
                backgroundColor: Color[key],
                width: 86,
                height: 86,
                marginBottom: 8,
                borderRadius: 6,
              }}
            ></div>
            <div style={{ marginBottom: 6, fontSize: 14 }}>{key}</div>
            <div style={{ fontSize: 14 }}>{Color[key]}</div>
          </div>
        );
      })}
    </div>
  );
};
