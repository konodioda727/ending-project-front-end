import React from 'react';
import {
  RandomObjectProps,
  RandomObjectTypes,
} from '../types/randomObjectTypes.ts';
import star from '../../assets/stars.svg';
import './stars.less';
import { gen } from '../../utils/keyGenerator.ts';
const RandomObject: React.FC<RandomObjectProps> = props => {
  const { configs, className } = props;
  const { size, animation, top, left } = configs;
  return (
    <>
      <img
        src={star}
        alt="star"
        className={`star-${size || 'medium'} ${className}`}
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
  starNum: number,
  generateFunction: (starNum: number) => RandomObjectTypes[]
): React.ReactElement {
  const configList = generateFunction(starNum);
  return (
    <>
      {configList.map(item => (
        <RandomObject configs={item} key={gen.next().value as string} />
      ))}
    </>
  );
}
