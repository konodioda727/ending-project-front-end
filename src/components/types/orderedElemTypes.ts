import { HTMLAttributes, ReactElement } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export interface OrderedElemTypes {
  children: string | ReactElement;
  mountindex?: number;
  stat?: ViewProps['stat'];
  OrderedElemSpeed?: number;
  noWait?: boolean;
}
export type OrderedElemProps = OrderedElemTypes &
  HTMLAttributes<HTMLDivElement>;
