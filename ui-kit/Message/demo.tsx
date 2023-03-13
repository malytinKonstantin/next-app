import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '@/stores/hooks';
import { Button } from '@/ui-kit';
import { MessageStatus } from './types';

export const DemoMessages = observer(() => {
  const { messagesStore } = useStores();
  const [id, setId] = useState(0);
  const addMessage = (status: MessageStatus) => {
    messagesStore.add({
      message: `A ${status} message`,
      id: `id-${id}-${status}`,
      status,
    });

    setId(id + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button onClick={() => addMessage(MessageStatus.success)}>
        Success message
      </Button>
      <Button onClick={() => addMessage(MessageStatus.error)}>
        Error message
      </Button>
      <Button onClick={() => addMessage(MessageStatus.warning)}>
        Warning message
      </Button>
    </div>
  );
});
