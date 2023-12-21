import React, { ReactElement, useEffect, useState } from 'react';
import { ContentViewProps, ViewProps } from '../types/contentViewTypes.ts';
import './index.less';
import MvPageButton from '../mvPageButton';
import useSwipeDetection from '../../hooks/swipeDetection.ts';
import { pickChildrenNeedRender } from './utils.ts';
import { Listeners } from '../../utils/listeners.ts';
import { gen } from '../../utils/keyGenerator.ts';
/* eslint-disable react-hooks/exhaustive-deps */
const ContentView: React.FC<ContentViewProps> = props => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [renderChildren, setRenderChildren] = useState<ReactElement[]>([]);
  const handleChanged = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handleUnomunted = (invisibleComponentNeedRendered: ReactElement) => {
    if (invisibleComponentNeedRendered != undefined) {
      setRenderChildren([
        React.cloneElement(invisibleComponentNeedRendered, {
          ...invisibleComponentNeedRendered.props,
          stat: 'mounting',
          key: gen.next().value,
        }),
      ]);
    }
  };
  function EditRenderChildren(): ReactElement | undefined {
    let toBeRendered = undefined;
    if (currentIndex >= React.Children.count(children)) return undefined;
    const retChildren = pickChildrenNeedRender(
      children as ReactElement[],
      currentIndex,
      child => {
        toBeRendered = child;
      }
    );
    setRenderChildren(retChildren);
    return toBeRendered;
  }
  useEffect(() => {
    const invisibleComponentNeedRendered = EditRenderChildren();
    const listeners = new Listeners([
      { event: 'mvPageVertically', callback: handleChanged },
      { event: 'mvPageHorizontally', callback: handleChanged },
      {
        event: 'unmounted',
        callback: () =>
          handleUnomunted(invisibleComponentNeedRendered as ReactElement),
      },
    ]);
    return () => listeners.removeListeners();
  }, [currentIndex]);
  return <>{renderChildren && renderChildren.map(item => item)}</>;
};
export default ContentView;

export const View: React.FC<ViewProps> = props => {
  const { stat, children, animationTime, disableScroll } = props;
  const [alive, setAlive] = useState<ViewProps['stat']>(stat);
  const [clickable, setClickable] = useState<boolean>(false);
  useSwipeDetection('mvPageVertically', () => {
    return disableScroll ? false : alive === 'visible';
  });

  useEffect(() => {
    setAlive(stat);
  }, [stat]);
  useEffect(() => {
    if (alive === 'unmounting' || alive === 'mounting') {
      setClickable(false);
      const timer = setTimeout(
        async () => {
          setAlive(alive === 'unmounting' ? 'invisible' : 'visible');
          setClickable(true);
          if (alive === 'unmounting') {
            const eve = new Event('unmounted');
            dispatchEvent(eve);
          }
          clearTimeout(timer);
        },
        animationTime
          ? animationTime * 1000
          : 600 * React.Children.count(children)
      );
    }
  }, [alive, children]);

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
