import React, { FC } from 'react';
import { TitleRow } from './TitleRow';

export const DemoTitleRow: FC = () => {
  return (
    <div style={{ padding: ' 0 0 20px' }}>
      <TitleRow mb={20} title="Title" level={2} />
      <TitleRow
        level={3}
        mb={20}
        title="Title"
        actionProps={{
          label: 'Action',
          onClick: () => {
            //noop
          },
        }}
      />
      <TitleRow
        level={4}
        mb={20}
        title="Title"
        actionProps={{
          label: 'Action',
          disabled: true,
          onClick: () => {
            //noop
          },
        }}
      />
      <TitleRow mb={20} title="Title" />
    </div>
  );
};
