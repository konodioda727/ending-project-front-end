import { ImgHTMLAttributes } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export type ImageTypes = {
  imageName?: string;
  stat?: ViewProps['stat'];
  delay?: number;
  animationTime?: number;
  firstPage?: boolean;
};

export type ImageProps = ImageTypes & ImgHTMLAttributes<HTMLImageElement>;
