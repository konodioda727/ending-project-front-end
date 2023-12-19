import { HTMLAttributes } from 'react';
import { ViewProps } from './contentViewTypes.ts';

export type MvPageButtonTypes = {
  clickable?: boolean;
  type: 'mvPageVertically' | 'mvPageHorizontally';
  stat?: ViewProps['stat'];
  mountindex?: number;
  onClick?: () => void;
};
export type MvPageButtonProps = MvPageButtonTypes &
  Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>;
