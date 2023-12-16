import { HTMLAttributes } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export interface WordTypes {
  children: string;
  mountindex?: number;
  stat?: ViewProps['stat'];
  wordSpeed?: number;
  firstPage?: boolean;
}
export type WordProps = WordTypes & HTMLAttributes<HTMLDivElement>;
