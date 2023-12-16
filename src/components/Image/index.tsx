import React from 'react';
import { ImageProps } from '../types/ImageTypes.ts';
import './index.less';
import { ViewProps } from '../types/contentViewTypes.ts';

const Image: React.FC<ImageProps> = props => {
  const {
    imageName,
    firstPage,
    className,
    animationTime,
    delay,
    stat,
    ...restProps
  } = props;
  return (
    <div
      className={` ${className} ${imageName}-${stat}`}
      style={{
        animation: `${imageName}-${stat} ${animationTime}s ease-in-out ${animationDelay(
          stat as ViewProps['stat'],
          delay as number,
          firstPage as boolean
        )}s forwards`,
      }}
    >
      <img {...restProps} alt={imageName}></img>
    </div>
  );
};

export default Image;

function animationDelay(
  stat: ViewProps['stat'],
  delay: number,
  firstPage: boolean
) {
  let delayTime = delay;
  if (stat === 'mounting') {
    delayTime += 2;
  }
  if (firstPage) delayTime = delay;
  return delayTime;
}
Image.defaultProps = {
  delay: 0.4,
  animationTime: 0.6,
  imageName: 'image',
  className: '',
};
