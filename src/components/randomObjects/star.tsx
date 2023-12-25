import React, { useEffect, useState } from 'react';
import { RandomElemProps } from '../types/randomObjectTypes.ts';
import star from '../../assets/stars.svg';
import { GenerateRandomComponents, GenerateConfigs } from './index.tsx';
import './stars.less';

export function GenerateStarConfigs(
  elemNum: number,
  posRange?: RandomElemProps['posRange']
) {
  const animationList: string[] = [];
  for (let i = 0; i < elemNum; i++) {
    animationList.push(
      `star-appear ${Math.random() * 5 + 3}s ease-in-out forwards ${
        Math.random() * 2 + 1
      }s, star-rotate 2s ease-in-out infinite ${Math.random() * 2}s`
    );
  }
  return GenerateConfigs({
    elemNum: elemNum,
    src: star,
    animation: animationList,
    posRange: posRange,
  });
}
export const Stars: React.FC<RandomElemProps> = props => {
  const { interval, stat, numRange, posRange } = props;
  const [renderChildren, setRenderChildren] = useState<React.ReactElement>(
    GenerateRandomComponents(
      GenerateStarConfigs(numRange ? numRange[1] : 8, posRange)
    )
  );
  useEffect(() => {
    const starNumRange = numRange
      ? Math.random() * (numRange[1] - numRange[0]) + numRange[0]
      : Math.random() * 2 + 10;
    const timer = setInterval(
      () => {
        setRenderChildren(
          GenerateRandomComponents(GenerateStarConfigs(starNumRange, posRange))
        );
      },
      interval ? interval : 10000
    );
    return () => clearInterval(timer);
  }, [interval, numRange, stat, posRange]);
  return <div className={`star-wrap-wrap-${stat}`}>{renderChildren}</div>;
};
