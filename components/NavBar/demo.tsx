import React from 'react';
import { NavBar } from './NavBar';

const blocStyle = { width: '50%' };
const navStyle = { border: '1px dotted #ccc', margin: 5 };

export const DemoNavBars = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={blocStyle}>
        <NavBar
          style={navStyle}
          leftButton={{
            rightIcon: {
              name: 'rightArrow',
              iconStyles: {
                rotate: '180deg',
              },
            },
          }}
          rightButton={{
            rightIcon: {
              name: 'rightArrow',
            },
          }}
          title="Title"
        />

        <NavBar
          style={navStyle}
          leftButton={{
            caption: 'Back',
            leftIcon: {
              name: 'rightArrow',
              iconStyles: {
                rotate: '180deg',
              },
            },
          }}
          rightButton={{
            caption: 'Next',
            rightIcon: {
              name: 'rightArrow',
            },
          }}
          title="Title"
        />

        <NavBar
          style={navStyle}
          leftButton={{
            caption: 'Delete',
            rightIcon: {
              name: 'close',
            },
          }}
          title="Title"
        />
      </div>
      <div style={blocStyle}>
        <NavBar
          style={navStyle}
          rightButton={{
            caption: 'Insert',
            leftIcon: {
              name: 'plus',
            },
          }}
          title="Title"
        />

        <NavBar
          style={navStyle}
          centerButton={{
            caption: 'Address',
            rightIcon: {
              name: 'rightArrow',
            },
          }}
          title="Title"
        />

        <NavBar
          style={navStyle}
          leftButton={{
            caption: 'Back',
            leftIcon: {
              name: 'rightArrow',
              iconStyles: {
                rotate: '180deg',
              },
            },
          }}
          rightButton={{
            caption: 'Next',
            rightIcon: {
              name: 'rightArrow',
            },
          }}
          centerButton={{
            caption: 'Address',
            rightIcon: {
              name: 'rightArrow',
            },
          }}
          title="Title"
        />
      </div>
    </div>
  );
};
