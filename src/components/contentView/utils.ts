import React, { ReactElement } from 'react';

export function pickChildrenNeedRender(
  children: ReactElement[],
  currentIndex: number,
  toBeRendered: (child: ReactElement) => void
): ReactElement[] {
  return React.Children.map(children, (child, index) => {
    if (index + 1 === currentIndex) {
      return React.cloneElement(child, {
        ...child.props,
        stat: 'unmounting',
      });
    }
    if (index === currentIndex && index != 0) {
      toBeRendered && toBeRendered(child);
      return React.cloneElement(child, {
        ...child.props,
        stat: 'invisible',
      });
    } else if (index === currentIndex) {
      return React.cloneElement(child, {
        ...child.props,
        stat: 'mounting',
      });
    }
    return null;
  });
}
