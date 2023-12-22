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

export interface StarProps {
  interval?: number;
  stat?: ViewProps['stat'];
  range?: number[];
}
