import { RandomElemProps } from '../types/randomObjectTypes.ts';
import { GenerateConfigs, GenerateRandomComponents } from './index.tsx';
import coin from '../../assets/images/coin.png';
import React, { useEffect, useState } from 'react';

export function GenerateCoinConfigs(
  elemNum: number,
  posRange?: RandomElemProps['posRange']
) {
  return GenerateConfigs(
    elemNum,
    coin,
    `coin-appear ${Math.random() * 5 + 3}s ease-in-out forwards ${
      Math.random() * 2 + 1
    }s, 
      coin-rotate 2s ease-in-out infinite ${Math.random() * 2}s`,
    posRange
  );
}
export const Coins: React.FC<RandomElemProps> = props => {
  const { interval, stat, numRange, posRange } = props;
  const [renderChildren, setRenderChildren] = useState<React.ReactElement>(
    GenerateRandomComponents(
      GenerateCoinConfigs(numRange ? numRange[1] : 8, posRange)
    )
  );
  useEffect(() => {
    const starNumRange = numRange
      ? Math.random() * (numRange[1] - numRange[0]) + numRange[0]
      : Math.random() * 2 + 10;
    const timer = setInterval(
      () => {
        setRenderChildren(
          GenerateRandomComponents(GenerateCoinConfigs(starNumRange, posRange))
        );
      },
      interval ? interval : 10000
    );
    return () => clearInterval(timer);
  }, [interval, numRange, stat, posRange]);
  return <div className={`star-wrap-wrap-${stat}`}>{renderChildren}</div>;
};
