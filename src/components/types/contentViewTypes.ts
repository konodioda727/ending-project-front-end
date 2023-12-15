import { ReactElement } from 'react';

export interface ContentViewProps {
  children: ReactElement<ViewProps>[] | ReactElement<ViewProps>;
}

export interface ViewProps {
  stat?: 'invisible' | 'mounting' | 'unmounting' | 'visible';
  children: ReactElement | ReactElement[];
  animationTime?: number;
}
