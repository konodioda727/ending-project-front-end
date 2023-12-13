import React, { useState, useRef, useEffect } from 'react';
import { drawGradient } from './canvas.ts';
import { PageOffsetType } from './types.ts';
import './index.less';

const GradientPage: React.FC = () => {
  const [offset, setOffset] = useState<PageOffsetType>({
    offsetY: 0,
    offsetX: 0,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleClick = (type: 'vertical' | 'horizontal') => {
    if (type === 'horizontal')
      setOffset({ offsetY: offset.offsetY, offsetX: offset.offsetX + 1000 });
    if (type === 'vertical')
      setOffset({ offsetX: offset.offsetX, offsetY: offset.offsetY + 80 });
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
    <>
      <canvas
        ref={canvasRef}
        width="2000vw"
        height="6000vh"
        className="background-page"
        data-testid={'gradient-background'}
        style={{
          position: 'absolute',
          left: `-${offset.offsetX}px`,
          top: `-${offset.offsetY}px`,
        }}
      />
    </>
  );
};

export default GradientPage;
