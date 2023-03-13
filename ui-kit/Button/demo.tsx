import { CSSProperties, useState } from 'react';
import { Title } from '../Typography';
import { Button } from './Button';

const smallButtonStyle: CSSProperties = {
  width: '150px',
  marginRight: '5px',
};

export const ButtonDemo = () => {
  const [spin, setSpin] = useState(true);
  const spinToggle = () => setSpin(!spin);

  return (
    <div>
      <div style={{ paddingTop: 0, display: 'flex' }}>
        <div style={{ width: 340, marginRight: 10 }}>
          <Title level={3}>primary</Title>
          <Button type="primary" block mb={30} icon="approveTick">
            Action
          </Button>
          <Button
            type="primary"
            block
            loading={spin}
            icon="approveTick"
            mb={30}
            onClick={spinToggle}
          >
            Action
          </Button>
          <Button type="primary" block disabled mb={30}>
            Action
          </Button>
        </div>
        <div style={{ width: 340, marginRight: 10 }}>
          <Title level={3}>secondary</Title>
          <Button type="secondary" icon="approveTick" block mb={30}>
            Action
          </Button>
          <Button
            type="secondary"
            block
            loading={spin}
            icon="approveTick"
            mb={30}
            onClick={spinToggle}
          >
            Action
          </Button>
          <Button type="secondary" block disabled mb={30}>
            Action
          </Button>
        </div>
        <div style={{ width: 340, marginRight: 10 }}>
          <Title level={3}>ghost</Title>
          <Button type="ghost" icon="approveTick" block mb={30}>
            Action
          </Button>
          <Button
            type="ghost"
            block
            loading={spin}
            icon="approveTick"
            mb={30}
            onClick={spinToggle}
          >
            Action
          </Button>
          <Button type="ghost" block disabled mb={30}>
            Action
          </Button>
        </div>
        <div style={{ width: 340, marginRight: 10 }}>
          <Title level={3}>danger</Title>
          <Button type="danger" icon="approveTick" block mb={30}>
            Action
          </Button>
          <Button
            type="danger"
            block
            loading={spin}
            icon="approveTick"
            mb={30}
            onClick={spinToggle}
          >
            Action
          </Button>
          <Button type="danger" block disabled mb={30}>
            Action
          </Button>
        </div>
      </div>
      <div style={{ width: 340, marginRight: 10 }}>
        <Title level={3}>small</Title>
        <div style={{ display: 'flex' }}>
          <div>
            <Button
              type="primary"
              icon="approveTick"
              size="small"
              mb={30}
              style={smallButtonStyle}
            >
              Primary
            </Button>
            <Button
              type="primary"
              size="small"
              icon="approveTick"
              loading={spin}
              block
              mb={30}
              onClick={spinToggle}
              style={smallButtonStyle}
            >
              Primary
            </Button>
            <Button
              type="primary"
              size="small"
              disabled
              mb={30}
              style={smallButtonStyle}
            >
              Primary
            </Button>
          </div>

          <div>
            <Button
              type="secondary"
              icon="approveTick"
              size="small"
              mb={30}
              style={smallButtonStyle}
            >
              Secondary
            </Button>

            <Button
              type="secondary"
              size="small"
              icon="approveTick"
              loading={spin}
              block
              mb={30}
              onClick={spinToggle}
              style={smallButtonStyle}
            >
              Secondary
            </Button>

            <Button
              type="secondary"
              size="small"
              disabled
              block
              mb={30}
              onClick={spinToggle}
              style={smallButtonStyle}
            >
              Secondary
            </Button>
          </div>

          <div>
            <Button
              type="ghost"
              icon="approveTick"
              size="small"
              mb={30}
              style={smallButtonStyle}
            >
              Ghost
            </Button>
            <Button
              type="ghost"
              size="small"
              icon="approveTick"
              loading={spin}
              block
              mb={30}
              onClick={spinToggle}
              style={smallButtonStyle}
            >
              Ghost
            </Button>
            <Button
              type="ghost"
              size="small"
              disabled
              mb={30}
              style={smallButtonStyle}
            >
              Ghost
            </Button>
          </div>

          <div>
            <Button
              type="danger"
              icon="approveTick"
              size="small"
              mb={30}
              style={smallButtonStyle}
            >
              Danger
            </Button>

            <Button
              type="danger"
              size="small"
              icon="approveTick"
              loading={spin}
              block
              mb={30}
              onClick={spinToggle}
              style={smallButtonStyle}
            >
              Danger
            </Button>

            <Button
              type="danger"
              disabled
              size="small"
              mb={30}
              style={smallButtonStyle}
            >
              Danger
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
