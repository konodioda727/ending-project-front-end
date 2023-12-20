export type offsetType = 'offsetX' | 'offsetY';

export type PageOffsetType = {
  [key in offsetType]: number;
};

export type mvTypes = 'horizontal' | 'vertical';

export type gradientPageConfigTypes = {
  [key in mvTypes]: {
    type: offsetType;
    value: number;
  };
};
