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
    firstPage,
    ...restProps
  } = props;
  const speed = wordSpeed ? wordSpeed : 0.6;
  const animationDelayTime = (): number => {
    let delay = 0;
    if (mountindex != undefined) {
      delay = (speed * mountindex) / 2;
      if (stat === 'mounting') {
        delay += 2;
      }
    }
    if (firstPage && mountindex != undefined)
      delay = (speed * mountindex) / 2 + 0.4;
    return delay;
  };
  return (
    <>
      <div
        className={`${className} word-${stat} word-wrap`}
        {...restProps}
        style={{
          ...style,
          animation: `word-${stat} ${speed}s ease-in-out forwards ${animationDelayTime()}s`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Word;

Word.defaultProps = {
  className: '',
  firstPage: false,
  wordSpeed: 0.6,
};
