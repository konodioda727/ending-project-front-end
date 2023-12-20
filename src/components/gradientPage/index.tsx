import React, { useState, useRef, useEffect } from 'react';
import { drawGradient } from './canvas.ts';
import { mvTypes, PageOffsetType } from '../types/gradientPageTypes.ts';
import './index.less';
import { gradientPageConfig } from '../../configs/gradientPageConfig.ts';
/* eslint-disable react-hooks/exhaustive-deps */

const GradientPage: React.FC = () => {
  const [offset, setOffset] = useState<PageOffsetType>({
    offsetY: 0,
    offsetX: 0,
  });
  const [reverse, setReverse] = useState<-1 | 1>(-1);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleClick = (mvType: mvTypes) => {
    const { type, value } = gradientPageConfig[mvType];
    if (offset[type] <= -3 * value) {
      setReverse(1);
    }
    if (offset[type] >= -1 * value) {
      setReverse(-1);
    }
    setOffset({ ...offset, [type]: offset[type] + reverse * value });
  };
  useEffect(() => {
    drawGradient(canvasRef);
  }, []);
  useEffect(() => {
    const handleRemove = () => {
      console.log('removed listener');
    };
    window.addEventListener('mvPageVertically', () => handleClick('vertical'));
    window.addEventListener('mvPageHorizontally', () =>
      handleClick('horizontal')
    );
    return () => window.removeEventListener('mvPageVertically', handleRemove);
  }, [offset]);

  return (
    <div className="canvas-wrap">
      <canvas
        ref={canvasRef}
        width="200%"
        height="200%"
        className="background-page"
        data-testid={'gradient-background'}
        style={{
          position: 'absolute',
          left: `${offset.offsetX}vh`,
          top: `${offset.offsetY}vh`,
        }}
      />
    </div>
  );
};

export default GradientPage;
