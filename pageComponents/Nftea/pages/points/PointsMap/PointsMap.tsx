import React, { FC, useState } from 'react';
import { Placemark, Map, YMaps, ZoomControl } from 'react-yandex-maps';
import * as Styled from './styles';
import { defaultState } from './constants';
import { PointsMapProps } from './types';

export const PointsMap: FC<PointsMapProps> = (props) => {
  const { items } = props;
  const [count, _] = useState(items.length);

  const state =
    items.length && count !== items.length
      ? { zoom: 13, center: items[0].coords }
      : defaultState;

  return (
    <Styled.Wrapper>
      <YMaps>
        <Map
          width="100%"
          height="100%"
          defaultState={defaultState}
          state={state}
        >
          {items.map((item) => (
            <Placemark
              key={item.id}
              geometry={item.coords}
              options={{
                iconLayout: 'default#image',
                iconImageHref: `./nftea/icons/pin${item.opening ? '-gray' : ''}.svg`,
              }}
            />
          ))}
          <ZoomControl />
        </Map>
      </YMaps>
    </Styled.Wrapper>
  );
};
