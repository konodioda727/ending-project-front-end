import { CSSProperties } from 'react';
import { ViewProps } from './contentViewTypes.ts';

type chartData = {
  name: string;
  value: string;
};
export interface ChartProps {
  type?: 'pie' | 'line' | 'bar';
  data?: chartData;
  id?: string;
  style?: CSSProperties;
  className?: string;
  stat?: ViewProps['stat'];
}
