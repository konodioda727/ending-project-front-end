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
  const speed = wordSpeed ? wordSpeed : 1;
  const animationDelayTime = (): number => {
    if (mountindex != undefined) return (speed * mountindex) / 2;
    return 0;
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
  wordSpeed: 1,
};
