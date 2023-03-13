import { makeAutoObservable } from 'mobx';
import { MessageProps } from '@/ui-kit/Message';

type MessageItem = MessageProps & {
  isOpen: boolean;
};

class MessagesStore {
  private defaultDuration = 8 * 1000; // 8 sec

  messages: { [key: string]: MessageItem } = {};

  constructor() {
    makeAutoObservable(this);
  }

  add(item: Pick<MessageProps, 'duration' | 'message' | 'status' | 'id'>) {
    const duration = item?.duration ?? this.defaultDuration;

    this.messages[item.id] = { ...item, duration, isOpen: true };

    setTimeout(() => {
      this.close(item.id);
    }, duration);
  }

  close(id: string) {
    this.messages[id] = {
      ...this.messages[id],
      isOpen: false,
    };
  }
}

export const messagesStore = new MessagesStore();
