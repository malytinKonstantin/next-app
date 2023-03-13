import React, { FC } from 'react';
import { TextRow } from './TextRow';

export const DemoTextRow: FC = () => {
  return (
    <div style={{ padding: ' 0 0 20px' }}>
      <TextRow
        mb={20}
        title="Title"
        label="Label"
        description="Description text"
      />
      <TextRow mb={20} title="Title" label="Label" />
      <TextRow mb={20} title="Title" />
      <TextRow
        mb={20}
        title="Title"
        label="Label"
        disabled
        description="Description text"
      />
    </div>
  );
};
