import { useEffect } from 'react';
import { listenerType } from '../components/types/contentViewTypes.ts';

const useListeners = (listeners: listenerType[]) => {
  useEffect(() => {
    const handleRemove = () => {
      console.log('removed listener');
    };

    listeners.forEach(listener => {
      window.addEventListener(listener.event, () => listener.callback());
    });

    return () => {
      listeners.forEach(listener => {
        window.removeEventListener(listener.event, handleRemove);
      });
    };
  }, [listeners]);
};

export default useListeners;
