import { makeAutoObservable } from 'mobx';

class ModalStore {
  isOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  showToggle() {
    this.isOpen = !this.isOpen;
  }

  setIsOpen(value: boolean) {
    this.isOpen = value;
  }
}

export const modalStore = new ModalStore();
