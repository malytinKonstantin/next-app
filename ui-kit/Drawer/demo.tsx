import React, { useState } from 'react';
import { Button } from '@/ui-kit/Button';
import { Drawer } from './Drawer';
import { Content } from './mock';

export const DemoDrawers = () => {
  const [isOpenTop, setIsOpenTop] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [isOpenBottom, setIsOpenBottom] = useState(false);
  const [isOpenLeft, setIsOpenLeft] = useState(false);

  const toggleTop = () => {
    setIsOpenTop(!isOpenTop);
  };

  const toggleRight = () => {
    setIsOpenRight(!isOpenRight);
  };

  const toggleBottom = () => {
    setIsOpenBottom(!isOpenBottom);
  };

  const toggleLeft = () => {
    setIsOpenLeft(!isOpenLeft);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <>
        <Button onClick={toggleTop}>Drawer (top)</Button>
        <Drawer isOpen={isOpenTop} position="top" onClose={toggleTop}>
          <Content />
        </Drawer>
      </>

      <>
        <Button onClick={toggleRight}>Drawer (right)</Button>
        <Drawer isOpen={isOpenRight} position="right" onClose={toggleRight}>
          <Content />
        </Drawer>
      </>

      <>
        <Button onClick={toggleBottom}>Drawer (bottom)</Button>
        <Drawer isOpen={isOpenBottom} position="bottom" onClose={toggleBottom}>
          <Content />
        </Drawer>
      </>

      <>
        <Button onClick={toggleLeft}>Drawer (left)</Button>
        <Drawer isOpen={isOpenLeft} position="left" onClose={toggleLeft}>
          <Content />
        </Drawer>
      </>
    </div>
  );
};
