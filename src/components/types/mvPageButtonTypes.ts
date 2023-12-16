import { HTMLAttributes } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export type MvPageButtonTypes = {
  clickable?: boolean;
  type: 'mvPageVertically' | 'mvPageHorizontally';
  stat?: ViewProps['stat'];
  mountindex?: number;
};
export type MvPageButtonProps = MvPageButtonTypes &
  HTMLAttributes<HTMLDivElement>;
