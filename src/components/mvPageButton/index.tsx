import React from 'react';
import { MvPageButtonProps } from '../types/mvPageButtonTypes.ts';
import Vertically from '../../assets/images/mvPageButtonVertical.png';
import Horizontally from '../../assets/images/mvPageButtonHorizontal.png';
import './index.less';
const MvPageButton: React.FC<MvPageButtonProps> = props => {
  const { className, onClick, mode, stat, type, clickable, ...restProps } =
    props;
  const handleClick = () => {
    const Eve = new Event(type ? type : 'mvPageVertically');
    if (onClick) onClick();
    if (clickable) return dispatchEvent(Eve);
  };
  return (
    <>
      <div
        onClick={() => handleClick()}
        className={`mv-page-button ${className} mv-page-button-${stat}`}
        style={{
          animation: `mv-page-button-${stat} 0.8s ease-in-out forwards 0.4s`,
        }}
        {...restProps}
      >
        <img
          className={'mv-page-button-image'}
          style={{ filter: mode === 'dark' ? 'invert(40%)' : '' }}
          src={type === 'mvPageHorizontally' ? Horizontally : Vertically}
          alt={'back '}
        ></img>
      </div>
    </>
  );
};

export default MvPageButton;

MvPageButton.defaultProps = {
  type: 'mvPageVertically',
  className: '',
  clickable: false,
};
