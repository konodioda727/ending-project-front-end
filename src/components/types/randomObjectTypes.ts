import { ViewProps } from './contentViewTypes.ts';

export type RandomObjectTypes = {
  size?: 'big' | 'small' | 'medium';
  top?: string;
  left?: string;
  animation: string;
  src: string;
  name?: string;
};

export interface RandomObjectProps {
  configs: RandomObjectTypes;
  className?: string;
}

export interface RandomElemProps {
  interval?: number;
  stat?: ViewProps['stat'];
  numRange?: number[];
  posRange?: {
    x: [min: number, max: number];
    y: [min: number, max: number];
  };
}
export type GeneConfigTypes = {
  elemNum: number;
  src: string;
  animation: string[];
  posRange?: RandomElemProps['posRange'];
  name?: string;
  biasedDom?: () => number;
};
