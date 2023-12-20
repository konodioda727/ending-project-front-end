import { useEffect, useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
const useSwipeDetection = (
  eventType: 'mvPageVertically' | 'mvPageHorizontally',
  dispatchFunction: () => boolean
) => {
  const [startY, setStartY] = useState<number>(0);
  const [endY, setEndY] = useState<number>(0);

  const handleTouchMove = (event: TouchEvent) => {
    setEndY(event.touches[0].clientY);
    event.preventDefault();
  };

  const handleTouchStart = (event: TouchEvent) => {
    setStartY(event.touches[0].clientY);
    setEndY(event.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const swipeDistance = startY - endY;
    if (swipeDistance > 200) {
      console.log(dispatchFunction());
      const evt = new Event(eventType);
      if (dispatchFunction()) {
        dispatchEvent(evt);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, endY]);

  return { handleTouchEnd };
};

export default useSwipeDetection;
