import React from 'react';
import { ImageProps } from '../types/ImageTypes.ts';
import './index.less';

const Image: React.FC<ImageProps> = props => {
  const {
    imageName,
    className,
    animationTime,
    delay,
    stat,
    animationType,
    ...restProps
  } = props;
  return (
    <div
      className={`${className} commonImage-${stat}`}
      style={{
        animation: `${imageName}-${stat} ${animationTime}s ease-in-out ${
          delay as number
        }s ${
          animationType && animationType[stat as string]
            ? (animationType[stat as string] as string)
            : 'forwards'
        }`,
      }}
    >
      <img {...restProps} className={'inner-image'} alt={'123'}></img>
    </div>
  );
};

export default Image;

Image.defaultProps = {
  delay: 0,
  animationTime: 0.6,
  imageName: 'defaultImage',
  className: '',
};
