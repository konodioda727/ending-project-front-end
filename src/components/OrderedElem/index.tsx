import React from 'react';
import { OrderedElemProps } from '../types/orderedElemTypes.ts';
import './index.less';

const OrderedElem: React.FC<OrderedElemProps> = props => {
  const {
    style,
    mountindex,
    children,
    stat,
    className,
    OrderedElemSpeed,
    ...restProps
  } = props;
  const speed = OrderedElemSpeed ? OrderedElemSpeed : 1;
  const animationDelayTime = (): number => {
    if (mountindex != undefined) return (speed * mountindex) / 2;
    return 0;
  };
  return (
    <>
      <div
        className={`${className} OrderedElem-${stat} OrderedElem-wrap`}
        {...restProps}
        style={{
          ...style,
          animation: `OrderedElem-${stat} ${speed}s ease-in-out forwards ${animationDelayTime()}s`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default OrderedElem;

OrderedElem.defaultProps = {
  className: '',
  OrderedElemSpeed: 1,
};
