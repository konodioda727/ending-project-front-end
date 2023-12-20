import { ReactElement } from 'react';

export interface ContentViewProps {
  children: ReactElement[] | ReactElement;
}

export interface ViewProps {
  stat?: 'invisible' | 'mounting' | 'unmounting' | 'visible';
  lastCousinElemNum?: number;
  children: ReactElement | ReactElement[];
  animationTime?: number;
  disableScroll?: boolean;
}
