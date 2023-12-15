import React, { ReactElement, useEffect, useState } from 'react';
import { ContentViewProps, ViewProps } from '../types/contentViewTypes.ts';
import './index.less';
import MvPageButton from '../mvPageButton';

const ContentView: React.FC<ContentViewProps> = props => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [renderChildren, setRenderChildren] = useState<ReactElement[]>([]);
  function EditRenderChildren() {
    const retChildren = React.Children.map(children, (child, index) => {
      if (index + 1 === currentIndex)
        return React.cloneElement(child, { stat: 'unmounting' });
      if (index === currentIndex)
        return React.cloneElement(child, { stat: 'mounting' });
      return null;
    });
    setRenderChildren(retChildren);
  }

  useEffect(() => {
    EditRenderChildren();
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
    return () => {
      window.removeEventListener('mvPageVertically', handleRemove);
      window.removeEventListener('mvPageHorizontally', handleRemove);
    };
  }, [currentIndex]);
  return <>{renderChildren && renderChildren.map(item => item)}</>;
};
export default ContentView;

export const View: React.FC<ViewProps> = props => {
  const { stat, children, animationTime } = props;
  const [alive, setAlive] = useState<ViewProps['stat']>('invisible');
  useEffect(() => {
    setAlive(stat);
    if (stat === 'unmounting' || stat === 'mounting') {
      const timer = setTimeout(
        () => {
          setAlive(stat === 'unmounting' ? 'invisible' : 'visible');
          clearTimeout(timer);
        },
        animationTime ? animationTime * 1000 : 1400
      );
    }
  }, [stat]);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        if (child.type === MvPageButton)
          return React.cloneElement(child, {
            ...child.props,
            index: count,
            stat: alive,
          });
        return React.cloneElement(child, {
          ...child.props,
          mountindex: index,
          unmountindex: count - index,
          stat: alive,
        });
      })}
    </>
  );
};
