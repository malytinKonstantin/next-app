import React from 'react';
import { Text } from './Text';

export const DemoTexts: React.FC = () => {
  return (
    <>
      <Text block>Text</Text>
      <Text block strong>
        Text (strong)
      </Text>
      <Text block underline>
        Text (underline)
      </Text>
      <Text block deleted>
        Text (deleted)
      </Text>
      <Text block size="small">
        Text (small)
      </Text>
    </>
  );
};
