import React from 'react';
import { WordProps } from '../types/wordTypes.ts';
import './index.less';

const Word: React.FC<WordProps> = props => {
  const {
    style,
    mountindex,
    children,
    stat,
    className,
    wordSpeed,
    ...restProps
  } = props;
  const speed = wordSpeed ? wordSpeed : 0.8;
  const animationDelayTime = (): number => {
    let delay = 0;
    if (mountindex != undefined) {
      delay = (speed * mountindex) / 2;
    }
    if (stat === 'mounting' && mountindex != undefined) {
      delay = (speed * mountindex) / 2 + 2;
    }
    return delay;
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
