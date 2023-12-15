import React from 'react';
import { WordProps } from '../types/wordTypes.ts';
import './index.less';

const Word: React.FC<WordProps> = props => {
  const {
    unmountindex,
    style,
    mountindex,
    children,
    stat,
    className,
    wordSpeed,
    ...restProps
  } = props;
  const speed = wordSpeed ? wordSpeed : 0.6;
  const animationDelayTime = (): number => {
    if (stat === 'unmounting' && unmountindex)
      return (speed * unmountindex) / 2;
    if (stat === 'mounting' && mountindex) return (speed * mountindex) / 2;
    return 0;
  };
  return (
    <>
      <div
        className={`${className ? className : ''} word-${stat} word-wrap`}
        {...restProps}
        style={{
          ...style,
          animation: `${stat} ${speed}s ease-in-out forwards ${animationDelayTime()}s`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Word;
