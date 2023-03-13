import React from 'react';
import { Text } from '@/ui-kit/Typography';
import { Divider } from './Divider';

export const DemoDividers = () => {
  return (
    <div>
      <Text block>Divider</Text>
      <Divider />
      <Text block>Divider margin 16</Text>
      <Divider pl={16} />
      <Text block>Divider margin 24</Text>
      <Divider pl={24} />
      <Text block>Divider margin 32</Text>
      <Divider pl={32} />
    </div>
  );
};
