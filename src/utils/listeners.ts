import { listenerType } from '../components/types/contentViewTypes.ts';

export class Listeners {
  listeners: listenerType[] = [];
  constructor(listeners: listenerType[]) {
    this.listeners = listeners;
    listeners.forEach(listener => {
      window.addEventListener(listener.event, () => listener.callback());
    });
  }
  handleRemove = () => {
    console.log('removed listener');
  };
  removeListeners() {
    this.listeners.forEach(listener => {
      window.removeEventListener(listener.event, this.handleRemove);
    });
  }
}
