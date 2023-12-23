import React, { useEffect, useState } from 'react';
import { ContentViewProps, ViewProps } from '../types/contentViewTypes.ts';
import './index.less';
import MvPageButton from '../mvPageButton';
import useSwipeDetection from '../../hooks/swipeDetection.ts';
import useListeners from '../../hooks/useListeners.ts';
const ContentView: React.FC<ContentViewProps> = props => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleUnomunted = () => {
    setCurrentIndex(currentIndex + 1);
  };
  useListeners([{ event: 'unmounted', callback: handleUnomunted }]);
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (index === currentIndex) return child;
        return null;
      })}
    </>
  );
};
export default ContentView;

export const View: React.FC<ViewProps> = props => {
  const { children, animationTime, disableScroll } = props;
  const [alive, setAlive] = useState<ViewProps['stat']>('mounting');
  const [clickable, setClickable] = useState<boolean>(false);
  const handleChangeStat = () => {
    alive === 'visible' && setAlive('unmounting');
  };
  useSwipeDetection('mvPageVertically', () => {
    return disableScroll ? false : alive === 'visible';
  });
  useListeners([
    { event: 'mvPageVertically', callback: handleChangeStat },
    { event: 'mvPageHorizontally', callback: handleChangeStat },
  ]);
  useEffect(() => {
    if (alive === 'unmounting' || alive === 'mounting') {
      setClickable(false);
      const timer = setTimeout(
        async () => {
          if (alive === 'mounting') {
            setAlive('visible');
            setClickable(true);
          }
          if (alive === 'unmounting') {
            const eve = new Event('unmounted');
            dispatchEvent(eve);
          }
        },
        animationTime
          ? animationTime * 1000
          : 600 * React.Children.count(children)
      );

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alive, animationTime, children]);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        if (child.type === MvPageButton)
          return React.cloneElement(child, {
            ...child.props,
            mountindex: count,
            stat: alive,
            clickable: clickable,
          });
        return React.cloneElement(child, {
          ...child.props,
          mountindex: index,
          stat: alive,
        });
      })}
    </>
  );
};
