export enum MessageStatus {
  success = 'success',
  error = 'error',
  warning = 'warning',
}

export interface MessageProps {
  id: string;
  isOpen: boolean;
  status: keyof typeof MessageStatus;
  message: string;
  duration?: number;
}
