import React, { FC } from 'react';
import { Info } from './Info';

export const DemoInfo: FC = () => {
  return (
    <div style={{ padding: ' 0 0 20px' }}>
      <Info mb={20} title="Title" type="info" description="Description text" />
      <Info
        mb={20}
        title="Title"
        type="neutral"
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
      <Info
        mb={20}
        title="Title"
        type="positive"
        description={
          <>
            <p>Custom description with jsx level 1</p>
            <p>Custom description with jsx level 2</p>
            <p>Custom description with jsx level 3</p>
          </>
        }
      />
      <Info
        mb={20}
        title="Title"
        type="warning"
        description="String description"
      />
      <Info mb={20} title="Title" type="negative" />
    </div>
  );
};
