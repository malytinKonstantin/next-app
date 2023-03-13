import React, { ChangeEvent, FC, useState } from 'react';
import * as Styled from './styles';
import { Input, Icon } from '@/ui-kit';
import { Row, Col } from '@/ui-kit/Grid';
import { PointsListProps } from './types';
import StarGreenIcon from '@/public/icons/flat/StarGreen.svg';
import { Opening } from './styles';

export const PointsList: FC<PointsListProps> = (props) => {
  const { items, setItems } = props;
  const [points, _] = useState(items);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const data = points.filter((item) => {
      return (
        item.address.toLowerCase().includes(value.toLowerCase()) ||
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setValue(value);
    setItems(data);
  };

  const openingSort = (a, b) => {
    if (a.opening) return 1;
    if (b.opening) return -1;
    return 0;
  };

  return (
    <Styled.Wrapper>
      <Styled.Bar>
        <Styled.Head onClick={() => setIsOpen(!isOpen)}>
          <Styled.Title>Список чайных</Styled.Title>
          <Styled.ToggleButton isOpen={isOpen}>
            <Icon name="rightArrow" />
          </Styled.ToggleButton>
        </Styled.Head>
        <Styled.Body isOpen={isOpen}>
          <Input
            placeholder="Укажите улицу"
            value={value}
            onChange={handleChange}
            mb={10}
          />
          <Styled.PointsList>
            {items.sort(openingSort).map((item) => {
              const { id, name, address, phone, workingHours, opening } = item;

              return (
                <Styled.PointsItem key={id}>
                  <Styled.SubTitle>{name}</Styled.SubTitle>
                  {address && <Styled.SubTitle>{address}</Styled.SubTitle>}
                  {opening && (
                    <Styled.Opening>
                      <StarGreenIcon />
                      <span>Скоро открытие</span>
                    </Styled.Opening>
                  )}
                  {phone && (
                    <Styled.P>
                      <span>Телефон: </span>
                      <span>{phone}</span>
                    </Styled.P>
                  )}
                  {workingHours && (
                    <Styled.P>
                      <span>Режим работы: </span>
                      <span>{workingHours}</span>
                    </Styled.P>
                  )}
                </Styled.PointsItem>
              );
            })}
          </Styled.PointsList>
        </Styled.Body>
      </Styled.Bar>
    </Styled.Wrapper>
  );
};
