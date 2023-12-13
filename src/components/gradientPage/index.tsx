import React, { useState, useRef, useEffect } from 'react';
import { drawGradient } from './canvas.ts';
import { PageOffsetType } from './types.ts';
import './index.less';

const GradientPage: React.FC = () => {
  const [offset, setOffset] = useState<PageOffsetType>({
    offsetY: 0,
    offsetX: 0,
  });
  const [reverse, setReverse] = useState<-1 | 1>(-1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleClick = (type: 'vertical' | 'horizontal') => {
    if (type === 'horizontal')
      setOffset({ ...offset, offsetX: offset.offsetX + reverse * 50 });
    if (type === 'vertical')
      setOffset({ ...offset, offsetY: offset.offsetY + reverse * 100 });
    if (offset.offsetX <= -100 || offset.offsetY <= -300) {
      setReverse(1);
    }
    if (offset.offsetX >= 100 || offset.offsetY >= -100) {
      setReverse(-1);
    }
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
    </>
  );
};

export default GradientPage;
