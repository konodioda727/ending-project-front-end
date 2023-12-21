import React, { useEffect, useState } from 'react';
import { RandomObjectTypes, StarProps } from '../types/randomObjectTypes.ts';
import star from '../../assets/stars.svg';
import { GenerateRandomComponents } from './index.tsx';
import './stars.less';
import { ViewProps } from '../types/contentViewTypes.ts';

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function biasedRandom() {
  const r = Math.random() * 10 - 5;
  return sigmoid(r) * 80 + '%';
}

export function GenerateStarConfigs(
  starNum: number,
  stat: ViewProps['stat']
): RandomObjectTypes[] {
  const res: RandomObjectTypes[] = [];
  const sizeDict: RandomObjectTypes['size'][] = ['medium', 'small', 'big'];
  console.log(stat);
  if (stat === 'invisible' || stat === 'unmounting') return [];
  for (let i = 0; i < starNum; i++) {
    res.push({
      size: sizeDict[Math.round(Math.random() * 2)],
      top: biasedRandom(),
      left: biasedRandom(),
      animation: `star-appear ${Math.random() * 5 + 3}s ease-in-out forwards ${
        Math.random() * 2 + 1
      }s, 
      star-rotate 2s ease-in-out infinite ${Math.random() * 2}s`,
      src: star,
    });
  }
  return res;
}

export const Stars: React.FC<StarProps> = props => {
  const { interval, stat, range } = props;
  const [renderChildren, setRenderChildren] = useState<React.ReactElement>(
    GenerateRandomComponents(GenerateStarConfigs(8, stat))
  );
  useEffect(() => {
    const timer = setInterval(
      () => {
        setRenderChildren(
          GenerateRandomComponents(
            GenerateStarConfigs(
              range
                ? Math.random() * (range[1] - range[0]) + range[0]
                : Math.random() * 2 + 10,
              stat
            )
          )
        );
      },
      interval ? interval : 10000
    );
    return () => clearInterval(timer);
  }, [interval, range, stat]);
  return <div className={`star-wrap-wrap-${stat}`}>{renderChildren}</div>;
};
