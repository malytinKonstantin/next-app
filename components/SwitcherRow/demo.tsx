import React, { FC } from 'react';
import { SwitcherRow } from './SwitcherRow';

export const DemoSwitcherRow: FC = () => {
  return (
    <div style={{ padding: ' 0 0 20px' }}>
      <SwitcherRow mb={20} title="Title" description="Description text" />
      <SwitcherRow
        mb={20}
        title="Title"
        description={() => {
          return (
            <>
              <p>Custom description with fun level 1</p>
              <p>Custom description with fun level 2</p>
              <p>Custom description with fun level 3</p>
            </>
          );
        }}
      />
      <SwitcherRow
        mb={20}
        title="Title"
        description={
          <>
            <p>Custom description with jsx level 1</p>
            <p>Custom description with jsx level 2</p>
            <p>Custom description with jsx level 3</p>
          </>
        }
      />
      <SwitcherRow
        mb={20}
        title="Title"
        switcherProps={{ disabled: true, checked: true }}
        description="String description"
      />
      <SwitcherRow mb={20} title="Title" />
    </div>
  );
};
