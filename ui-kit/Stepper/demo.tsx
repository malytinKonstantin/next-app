import { CSSProperties } from 'react';
import { Title } from '@/ui-kit';
import { Stepper } from './Stepper';

const wrapperStyle: CSSProperties = {
  width: '20%',
};

export const StepperDemo = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        background: 'linear-gradient(to bottom, transparent, #000)',
      }}
    >
      <div style={wrapperStyle}>
        <Title level={3} align="left">
          Stepper small
        </Title>
        <Stepper mb={20} min={0} max={999} initialValue={1} size="small" />
        <Stepper
          mb={20}
          min={0}
          max={999}
          initialValue={1}
          size="small"
          incrementProps={{ loading: true }}
        />
      </div>
      <div style={wrapperStyle}>
        <Title level={3} align="left">
          Stepper middle
        </Title>
        <Stepper mb={20} min={0} max={999} initialValue={1} size="middle" />
        <Stepper
          mb={20}
          min={0}
          max={999}
          initialValue={1}
          size="middle"
          incrementProps={{ loading: true }}
        />
      </div>
      <div style={{ ...wrapperStyle, color: 'white' }}>
        <Title level={3} align="left">
          Stepper large
        </Title>
        <Stepper mb={20} min={1} max={1} initialValue={1} />
        <Stepper mb={20} min={1} max={999} initialValue={1} />
        <Stepper
          mb={20}
          min={1}
          max={14}
          step={5}
          initialValue={13}
          incrementProps={{ loading: true }}
        />
        <Stepper
          mb={20}
          min={1}
          max={14}
          step={5}
          initialValue={14}
          decrementProps={{ loading: true }}
        />
      </div>
    </div>
  );
};
