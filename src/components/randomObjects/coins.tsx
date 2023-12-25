import { RandomElemProps } from '../types/randomObjectTypes.ts';
import { GenerateConfigs, GenerateRandomComponents } from './index.tsx';
import coin from '../../assets/images/coin.png';
import React, { useEffect, useState } from 'react';

export function GenerateCoinConfigs(
  elemNum: number,
  posRange?: RandomElemProps['posRange']
) {
  const animationList: string[] = [];
  for (let i = 0; i < elemNum; i++) {
    animationList.push(`coin-appear ${
      Math.random() * 6 + 2
    }s ease-in-out forwards ${Math.random() * 2}s, 
      coin-rotate 2s linear infinite ${Math.random() * 2}s`);
  }
  return GenerateConfigs({
    elemNum: elemNum,
    src: coin,
    animation: animationList,
    posRange: posRange,
    name: 'coin',
    biasedDom: () => {
      const r = Math.random();
      return r * 90;
    },
  });
}
export const Coins: React.FC<RandomElemProps> = props => {
  const { stat, numRange, posRange } = props;
  const [renderChildren, setRenderChildren] = useState<React.ReactElement>(
    GenerateRandomComponents(
      GenerateCoinConfigs(numRange ? numRange[1] : 8, posRange)
    )
  );
  useEffect(() => {
    const coinNumRange = numRange
      ? Math.random() * (numRange[1] - numRange[0]) + numRange[0]
      : Math.random() * 2 + 10;
    const timer = setInterval(() => {
      setRenderChildren(
        GenerateRandomComponents(GenerateCoinConfigs(coinNumRange, posRange))
      );
    }, 10000);
    return () => clearInterval(timer);
  }, [numRange, posRange]);
  return <div className={`star-wrap-wrap-${stat}`}>{renderChildren}</div>;
};
