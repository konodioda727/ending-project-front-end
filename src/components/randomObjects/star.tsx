import React, { useEffect, useState } from 'react';
import { RandomObjectTypes, StarProps } from '../types/randomObjectTypes.ts';
import star from '../../assets/stars.svg';
import { GenerateRandomComponents } from './index.tsx';
import './stars.less';

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function biasedRandom() {
  const r = Math.random() * 10 - 5;
  return sigmoid(r) * 80;
}

export function GenerateStarConfigs(
  starNum: number,
  posRange?: StarProps['posRange']
): RandomObjectTypes[] {
  const res: RandomObjectTypes[] = [];
  const sizeDict: RandomObjectTypes['size'][] = ['medium', 'small', 'big'];
  const genePos = (posRange: StarProps['posRange'], axis: 'x' | 'y') => {
    return `${
      posRange
        ? biasedRandom() * (posRange[axis][1] - posRange[axis][0]) +
          posRange[axis][0]
        : biasedRandom()
    }%`;
  };
  for (let i = 0; i < starNum; i++) {
    res.push({
      size: sizeDict[Math.round(Math.random() * 2)],
      top: genePos(posRange, 'x'),
      left: genePos(posRange, 'x'),
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
  const { interval, stat, numRange, posRange } = props;
  const [renderChildren, setRenderChildren] = useState<React.ReactElement>(
    GenerateRandomComponents(GenerateStarConfigs(8, posRange))
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
