import { HTMLAttributes, ReactElement } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export interface WordTypes {
  children: string | ReactElement;
  mountindex?: number;
  stat?: ViewProps['stat'];
  wordSpeed?: number;
  noWait?: boolean;
}
export type WordProps = WordTypes & HTMLAttributes<HTMLDivElement>;
