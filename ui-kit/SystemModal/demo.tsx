import React, { useState } from 'react';
import { Button } from '@/ui-kit/Button';
import { SystemModal } from './SystemModal';

export const DemoSystemModals = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSystemModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={toggleSystemModal}>System Modal</Button>
      <SystemModal
        isOpen={isOpen}
        title="Title"
        text="Here’s an alert description that uses Auto Layout!"
        actions={[
          {
            id: '0',
            caption: 'Ok',
            onClick: toggleSystemModal,
          },
          {
            id: '1',
            caption: 'Close',
            onClick: toggleSystemModal,
          },
        ]}
      />
    </div>
  );
};
