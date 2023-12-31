import React from 'react';
import {
  GeneConfigTypes,
  RandomElemProps,
  RandomObjectProps,
  RandomObjectTypes,
} from '../types/randomObjectTypes.ts';
import './stars.less';
import { gen } from '../../utils/keyGenerator.ts';
const RandomObject: React.FC<RandomObjectProps> = props => {
  const { configs, className } = props;
  const { size, src, animation, name, top, left } = configs;
  return (
    <>
      <img
        src={src}
        alt={name || 'star'}
        className={`${name || 'star'}-${size || 'medium'} ${className}`}
        style={{
          top: top || 0,
          left: left || 0,
          animation: animation,
        }}
      />
    </>
  );
};
export default RandomObject;

export function GenerateRandomComponents(
  generation: RandomObjectTypes[]
): React.ReactElement {
  return (
    <>
      {generation.map(item => (
        <RandomObject configs={item} key={gen.next().value as string} />
      ))}
    </>
  );
}
function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function biasedRandom() {
  const r = Math.random() * 10 - 5;
  return sigmoid(r) * 80;
}

export function GenerateConfigs(props: GeneConfigTypes): RandomObjectTypes[] {
  const res: RandomObjectTypes[] = [];
  const sizeDict: RandomObjectTypes['size'][] = ['medium', 'small', 'big'];
  const { name, elemNum, posRange, src, animation, biasedDom } = props;
  const genePos = (posRange: RandomElemProps['posRange'], axis: 'x' | 'y') => {
    const bias = biasedDom || biasedRandom;
    return `${
      posRange
        ? (bias() * (posRange[axis][1] - posRange[axis][0])) / 100 +
          posRange[axis][0]
        : bias()
    }%`;
  };
  for (let i = 0; i < elemNum; i++) {
    res.push({
      size: sizeDict[Math.round(Math.random() * 2)],
      top: genePos(posRange, 'y'),
      left: genePos(posRange, 'x'),
      animation: animation[i],
      src: src,
      name: name,
    });
  }
  return res;
}
