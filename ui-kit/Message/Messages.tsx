import React from 'react';
import { observer } from 'mobx-react';
import { Transition } from 'react-transition-group';
import { useStores } from '@/stores/hooks';
import { Message } from './Message';
import * as Styled from './styles';
import type { MessageProps } from './types';

const duration = 350;

const defaultStyle = {
  transition: `${duration}ms ease-in-out`,
  maxHeight: 0,
  opacity: 0,
  position: 'relative',
};

const transitionStyles = {
  entering: { maxHeight: 300, opacity: 1 },
  entered: { maxHeight: 300, opacity: 1 },
  exiting: { maxHeight: 0, opacity: 0 },
  exited: { maxHeight: 0, opacity: 0, display: 'none' },
};

export const Messages = observer(() => {
  const { messagesStore } = useStores();

  const messages: MessageProps[] = Object.values(messagesStore.messages);

  if (messages.length === 0) {
    return null;
  }

  return (
    <Styled.MessagesWrapper>
      {messages.map((message: MessageProps) => {
        return (
          <Transition in={message.isOpen} timeout={duration}>
            {(state) => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <Message key={message.id} {...message} />
              </div>
            )}
          </Transition>
        );
      })}
    </Styled.MessagesWrapper>
  );
});
