import React, { FC } from 'react';
import { InfoRow } from './InfoRow';

export const DemoInfoRow: FC = () => {
  return (
    <div style={{ padding: ' 0 0 20px' }}>
      <InfoRow
        mb={20}
        title="Title"
        description="Description text"
        iconProps={{ name: 'star' }}
      />
      <InfoRow
        mb={20}
        title="Title"
        actionProps={{
          label: 'Action',
          onClick: () => {
            //noop
          },
        }}
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
      <InfoRow
        mb={20}
        title="Title"
        disabled
        actionProps={{
          label: 'Action',
          disabled: true,
          onClick: () => {
            //noop
          },
        }}
        description={
          <>
            <p>Custom description with jsx level 1</p>
            <p>Custom description with jsx level 2</p>
            <p>Custom description with jsx level 3</p>
          </>
        }
      />
      <InfoRow mb={20} title="Title" description="String description" />
      <InfoRow iconProps={{ name: 'frenchFries' }} mb={20} title="Title" />
    </div>
  );
};
