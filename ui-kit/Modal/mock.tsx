import React, { FC } from 'react';
import { Button } from '@/ui-kit/Button';
import { Icon } from '@/ui-kit/Icon';
import { Title } from '@/ui-kit/Typography';
import { ModalProps } from './types';

export const Content: FC<{ onClose?: ModalProps['onClose'] }> = (props) => {
  const { onClose } = props;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon
          name="greenApple"
          iconStyles={{ width: '44px', height: '44px', marginRight: '10px' }}
        />
        <Title level={2}>Заказ оплачен</Title>
      </div>
      <p>Ожидайте, скоро курьер доставит вам заказ.</p>
      <Button block mb={10}>
        Перейти в мои заказы
      </Button>
      <Button block type="secondary" onClick={onClose}>
        Закрыть
      </Button>
    </>
  );
};
