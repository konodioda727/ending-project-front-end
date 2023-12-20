import React, { ReactElement, useEffect, useState } from 'react';
import { ContentViewProps, ViewProps } from '../types/contentViewTypes.ts';
import './index.less';
import MvPageButton from '../mvPageButton';
import { gen } from '../../utils/keyGenerator.ts';
import useSwipeDetection from '../../hooks/swipeDetection.ts';
/* eslint-disable react-hooks/exhaustive-deps */
const ContentView: React.FC<ContentViewProps> = props => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [renderChildren, setRenderChildren] = useState<ReactElement[]>([]);
  const [toBeRendered, setToBeRendered] = useState<ReactElement | undefined>(
    undefined
  );
  function EditRenderChildren() {
    setToBeRendered(undefined);
    if (currentIndex >= React.Children.count(children)) return;
    const retChildren = React.Children.map(children, (child, index) => {
      if (index + 1 === currentIndex) {
        return React.cloneElement(child, {
          stat: 'unmounting',
          ...child.props,
        });
      }
      if (index === currentIndex && index != 0) {
        console.log('changed toberendered');
        setToBeRendered(child as ReactElement);
        return React.cloneElement(child, {
          ...child.props,
          stat: 'invisible',
        });
      } else if (index === currentIndex) {
        return React.cloneElement(child, {
          ...child.props,
          stat: 'mounting',
        });
      }

      return null;
    });
    setRenderChildren(retChildren);
  }
  useEffect(() => {
    EditRenderChildren();
  }, [currentIndex]);
  useEffect(() => {
    const handleChanged = async () => {
      setCurrentIndex(currentIndex + 1);
    };
    const handleRemove = () => {
      console.log('removed listener');
    };
    window.addEventListener('mvPageVertically', () =>
      handleChanged().then(null, null)
    );
    window.addEventListener('mvPageHorizontally', () =>
      handleChanged().then(null, null)
    );
    window.addEventListener('unmounted', () => {
      console.log('unmounted', toBeRendered);
      if (toBeRendered != undefined) {
        console.log(renderChildren, toBeRendered);
        setRenderChildren([
          React.cloneElement(toBeRendered, {
            ...toBeRendered.props,
            stat: 'mounting',
            key: gen.next().value,
          }),
        ]);
      }
    });
    return () => {
      window.removeEventListener('mvPageVertically', handleRemove);
      window.removeEventListener('mvPageHorizontally', handleRemove);
    };
  }, [toBeRendered]);
  return <>{renderChildren && renderChildren.map(item => item)}</>;
};
export default ContentView;

export const View: React.FC<ViewProps> = props => {
  const { stat, children, animationTime, disableScroll } = props;
  const [alive, setAlive] = useState<ViewProps['stat']>('invisible');
  const [clickable, setClickable] = useState<boolean>(false);
  useSwipeDetection('mvPageVertically', () => {
    return disableScroll ? false : alive === 'visible';
  });

  useEffect(() => {
    setAlive(stat);
    if (stat === 'unmounting' || stat === 'mounting') {
      setClickable(false);
      const timer = setTimeout(
        () => {
          if (stat === 'unmounting') {
            const eve = new Event('unmounted');
            dispatchEvent(eve);
          }
          setAlive(stat === 'unmounting' ? 'invisible' : 'visible');
          setClickable(true);
          clearTimeout(timer);
        },
        animationTime
          ? animationTime * 1000
          : 600 * React.Children.count(children)
      );
    }
  }, [stat, animationTime, children]);

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
