import React, { FC } from 'react';
import { Text } from '@/ui-kit';
import { Amount } from './Amount';

export const DemoAmounts: FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>
        <Text strong block>
          Amount
        </Text>
        <Amount value={5999} />
      </p>
      <p>
        <Text strong block>
          Amount with old amount
        </Text>
        <Amount oldValue={5999} value={4999} />
      </p>
      <p>
        <Text strong block>
          Amount (disabled)
        </Text>
        <Amount value={5999} disabled />
      </p>
      <p>
        <Text strong block>
          Amount (disabled) with old amount
        </Text>
        <Amount oldValue={5999} value={4999} disabled />
      </p>
    </div>
  );
};
