import { HTMLAttributes } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export interface WordTypes {
  children: string;
  mountindex?: number;
  unmountindex?: number;
  stat?: ViewProps['stat'];
  wordSpeed?: number;
}
export type WordProps = WordTypes & HTMLAttributes<HTMLDivElement>;
