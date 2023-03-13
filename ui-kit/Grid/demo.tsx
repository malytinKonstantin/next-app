import React, { CSSProperties, FC, PropsWithChildren, useState } from 'react';
import { Title } from '@/ui-kit/Typography';
import { Row } from './Row';
import { Col } from './Col';
import { Color } from '@/ui-kit/@constants/color';
import { Justify } from './types';
import { SegmentedPicker } from '@/ui-kit/SegmentedPicker/SegmentedPicker';

const rowStyle: CSSProperties = {
  border: `1px dotted ${Color.foodCity.Black_Oven_10}`,
};
const Card: FC<PropsWithChildren<{ color?: string }>> = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color ? props.color : Color.foodCity.Red_Tomato,
        padding: 15,
        borderRadius: 6,
      }}
    >
      {props.children}
    </div>
  );
};

export const DemoGrids = () => {
  const [justify, setJustify] = useState<Justify>('start');
  return (
    <>
      <Title level={3}>Example #1</Title>
      <Row gutter={4} style={rowStyle}>
        <Col span={12}>
          <Card>col-12</Card>
        </Col>

        <Col span={6}>
          <Card>col-6</Card>
        </Col>
        <Col span={6}>
          <Card>col-6</Card>
        </Col>

        <Col span={4}>
          <Card>col-4</Card>
        </Col>
        <Col span={4}>
          <Card>col-4</Card>
        </Col>

        <Col span={4}>
          <Card>col-4</Card>
        </Col>

        <Col span={3}>
          <Card>col-3</Card>
        </Col>
        <Col span={3}>
          <Card>col-3</Card>
        </Col>
        <Col span={3}>
          <Card>col-3</Card>
        </Col>
        <Col span={3}>
          <Card>col-3</Card>
        </Col>

        <Col span={2}>
          <Card>col-2</Card>
        </Col>
        <Col span={2}>
          <Card>col-2</Card>
        </Col>
        <Col span={2}>
          <Card>col-2</Card>
        </Col>
        <Col span={2}>
          <Card>col-2</Card>
        </Col>
        <Col span={2}>
          <Card>col-2</Card>
        </Col>
        <Col span={2}>
          <Card>col-2</Card>
        </Col>

        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
        <Col span={1}>
          <Card>col-1</Card>
        </Col>
      </Row>

      <Title level={3}>Example #2</Title>
      <Row gutter={[4, 8]} style={rowStyle}>
        <Col span={1}>
          <Card color={Color.foodCity.Green_Salad}>col-1</Card>
        </Col>
        <Col span={11}>
          <Card color={Color.foodCity.Green_Salad}>col-11</Card>
        </Col>

        <Col span={9}>
          <Card color={Color.foodCity.Green_Salad}>col-9</Card>
        </Col>
        <Col span={2}>
          <Card color={Color.foodCity.Green_Salad}>col-2</Card>
        </Col>
        <Col span={1}>
          <Card color={Color.foodCity.Green_Salad}>col-1</Card>
        </Col>

        <Col span={5}>
          <Card color={Color.foodCity.Green_Salad}>col-5</Card>
        </Col>
        <Col span={1}>
          <Card color={Color.foodCity.Green_Salad}>col-1</Card>
        </Col>
        <Col span={5}>
          <Card color={Color.foodCity.Green_Salad}>col-5</Card>
        </Col>
        <Col span={1}>
          <Card color={Color.foodCity.Green_Salad}>col-1</Card>
        </Col>

        <Col span={7}>
          <Card color={Color.foodCity.Green_Salad}>col-7</Card>
        </Col>
        <Col span={3}>
          <Card color={Color.foodCity.Green_Salad}>col-3</Card>
        </Col>
        <Col span={2}>
          <Card color={Color.foodCity.Green_Salad}>col-2</Card>
        </Col>

        <Col span={4}>
          <Card color={Color.foodCity.Green_Salad}>col-4</Card>
        </Col>
        <Col span={8}>
          <Card color={Color.foodCity.Green_Salad}>col-8</Card>
        </Col>
      </Row>

      <Title level={3}>Example #3</Title>
      <SegmentedPicker
        defaultValue="start"
        items={[
          {
            label: 'start',
            value: 'start',
          },
          {
            label: 'end',
            value: 'end',
          },
          {
            label: 'center',
            value: 'center',
          },
          {
            label: 'around',
            value: 'around',
          },
          {
            label: 'between',
            value: 'between',
          },
        ]}
        onChange={(value) => setJustify(value as Justify)}
      />
      <Row gutter={[4, 8]} justify={justify} style={rowStyle}>
        <Col span={3}>
          <Card color={Color.foodCity.Black_Oven_35}>col-3</Card>
        </Col>
        <Col span={3}>
          <Card color={Color.foodCity.Black_Oven_35}>col-3</Card>
        </Col>
        <Col span={3}>
          <Card color={Color.foodCity.Black_Oven_35}>col-3</Card>
        </Col>
      </Row>
    </>
  );
};
