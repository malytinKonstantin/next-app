import React, { useState } from 'react';
import { PageWrapper } from '@/pageComponents/Nftea/components';
import {
  PointsList,
  PointsMap,
  Styled,
  points,
} from '@/pageComponents/Nftea/pages/points';

const PointsPage = () => {
  const [items, setItems] = useState(
    points.sort((a, b) => (a.address > b.address ? 1 : -1)),
  );

  return (
    <PageWrapper noPadding>
      <Styled.Wrapper>
        <PointsMap items={items} />
        <PointsList items={items} setItems={(items) => setItems(items)} />
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default PointsPage;
