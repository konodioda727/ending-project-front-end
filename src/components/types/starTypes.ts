export type StarTypes = {
  appear_interval?: number;
  delay?: number;
  size?: 'big' | 'small' | 'medium';
  top?: string;
  left?: string;
};

export interface StarProps {
  configs: StarTypes;
  className?: string;
}
