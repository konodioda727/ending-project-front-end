import React, { useEffect, useState } from 'react';
import { RandomObjectTypes, StarProps } from '../types/randomObjectTypes.ts';
import star from '../../assets/stars.svg';
import { GenerateRandomComponents } from './index.tsx';

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}
// sigmoid函数增加边缘概率
function biasedRandom() {
  const r = Math.random() * 10 - 5;
  return sigmoid(r) * 90 + '%';
}
export function GenerateStarConfigs(starNum: number): RandomObjectTypes[] {
  const res: RandomObjectTypes[] = [];
  const sizeDict: RandomObjectTypes['size'][] = ['medium', 'small', 'big'];
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
  const { interval, stat } = props;
  const [renderChildren, setRenderChildren] = useState<React.ReactElement>(
    GenerateRandomComponents(8, GenerateStarConfigs)
  );
  useEffect(() => {
    const timer = setInterval(
      () => {
        setRenderChildren(
          GenerateRandomComponents(Math.random() * 6 + 6, GenerateStarConfigs)
        );
      },
      interval ? interval : 10000
    );
    return () => clearInterval(timer);
  }, []);
  return <div className={`star-wrap star-${stat}`}>{renderChildren}</div>;
};
