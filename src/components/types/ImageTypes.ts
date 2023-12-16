import { ImgHTMLAttributes } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export type ImageTypes = {
  imageName?: string;
  stat?: ViewProps['stat'];
  delay?: number;
  animationTime?: number;
  noWait?: boolean;
  animationType?: {
    [key in ViewProps['stat'] as string]?: aniEndType;
  };
};
export type aniEndType = 'infinite' | 'forwards' | 'backwards';

export type ImageProps = ImageTypes & ImgHTMLAttributes<HTMLImageElement>;
