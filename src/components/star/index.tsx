import React from 'react';
import { StarProps, StarTypes } from '../types/starTypes.ts';
import star from '../../assets/stars.svg';
import './index.less';
import { gen } from '../../utils/keyGenerator.ts';
const Star: React.FC<StarProps> = props => {
  const { configs, className } = props;
  const { size, delay, appear_interval, top, left } = configs;
  return (
    <>
      <img
        src={star}
        alt="star"
        className={`star-${size || 'medium'} ${className}`}
        style={{
          top: top || 0,
          left: left || 0,
          animation: `appear ${appear_interval || 1.2}s ease-in-out forwards ${
            delay || 0
          }s, rotate 2s ease-in-out infinite`,
        }}
      />
    </>
  );
};
export default Star;
// 二次函数增加边缘概率
function biasedRandom() {
  const r = Math.random();
  return Math.pow(r, 2) * 98 + '%';
}
export function GenerateStarConfigs(starNum: number): StarTypes[] {
  const res: StarTypes[] = [];
  const sizeDict: StarTypes['size'][] = ['medium', 'small', 'big'];
  for (let i = 0; i < starNum; i++) {
    res.push({
      size: sizeDict[Math.random() * 2],
      top: biasedRandom(),
      left: biasedRandom(),
      delay: Math.random() * 2,
      appear_interval: Math.random() * 5 + 3,
    });
  }
  return res;
}

export function GenerateStarComponents(starNum: number): React.ReactElement {
  const configList = GenerateStarConfigs(starNum);
  return (
    <>
      {configList.map(item => (
        <Star configs={item} key={gen.next().value as string} />
      ))}
    </>
  );
}
