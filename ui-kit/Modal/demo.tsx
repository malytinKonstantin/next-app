import React, { useState } from 'react';
import { Button } from '@/ui-kit/Button';
import { Modal } from './Modal';
import { Content } from './mock';

export const DemoModals = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <>
        <Button onClick={toggle1}>Modal (with close button)</Button>
        <Modal isOpen={isOpen1} onClose={toggle1}>
          <Content onClose={toggle1} />
        </Modal>
      </>

      <>
        <Button onClick={toggle2}>Modal</Button>
        <Modal isOpen={isOpen2}>
          <Content onClose={toggle2} />
        </Modal>
      </>
    </div>
  );
};
