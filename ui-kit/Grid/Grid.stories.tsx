import React, { FC, PropsWithChildren, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Row } from './Row';
import { Col } from './Col';
import '@/styles/globals.css';
import { SegmentedPicker } from '@/ui-kit/SegmentedPicker/SegmentedPicker';
import { Justify, Span } from './types';
import { Stepper } from '@/ui-kit/Stepper/Stepper';
import { Color } from '@/ui-kit/@constants/color';

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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ui-kit/Grid',
  component: Row,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Row>;

const initCol = 12;
const initSpan = 1;
const min = 1;
const max = 12;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row> = (args) => {
  const [justify, setJustify] = useState<Justify>('start');
  const [col, setCol] = useState(initCol);
  const [span, setSpan] = useState<Span>(initSpan);

  return (
    <div>
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
      <p>
        <span>Col count</span>
        <Stepper
          initialValue={initCol}
          min={min}
          max={max}
          onChange={(value) => setCol(value)}
        />
      </p>
      <p>
        <span>Col span</span>
        <Stepper
          initialValue={initSpan}
          min={min}
          max={max}
          onChange={(value) => setSpan(value as Span)}
        />
      </p>
      <Row
        gutter={5}
        justify={justify}
        style={{ border: `1px dotted ${Color.foodCity.Black_Oven_10}` }}
      >
        {new Array(col).fill('').map((_, index) => (
          <Col key={new Date().toISOString() + index} span={span}>
            <Card>{`col-${span}`}</Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
