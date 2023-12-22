import React from 'react';
import {
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
