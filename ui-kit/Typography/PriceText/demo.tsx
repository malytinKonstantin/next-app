import React from 'react';
import { Text } from '../Text';
import { PriceText } from './PriceText';

export const DemoPriceTexts: React.FC = () => {
  return (
    <>
      <p>
        <Text>PriceText (large)</Text>
        <PriceText size="large">{18_000}</PriceText>
      </p>
      <p>
        <Text>PriceText (middle)</Text>
        <PriceText>{18_000}</PriceText>
      </p>
      <p>
        <Text>PriceText (small)</Text>
        <PriceText size="small">{18_000}</PriceText>
      </p>
      <p>
        <Text>PriceText (extra-small)</Text>
        <PriceText size="extra-small">{18_000}</PriceText>
      </p>
    </>
  );
};
