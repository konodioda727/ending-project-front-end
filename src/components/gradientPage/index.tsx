import React, { useState, useRef, useEffect } from 'react';
import { drawGradient } from './canvas.ts';
import { PageOffsetType } from '../types/gradientPageTypes.ts';
import './index.less';
import { GenerateStarComponents } from '../star';

const GradientPage: React.FC = () => {
  const [offset, setOffset] = useState<PageOffsetType>({
    offsetY: 0,
    offsetX: 0,
  });
  const [reverse, setReverse] = useState<-1 | 1>(-1);
  const [stars, setStars] = useState<React.ReactElement>(
    GenerateStarComponents(8)
  );

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
    setInterval(() => {
      setStars(GenerateStarComponents(Math.random() * 6 + 6));
    }, 10000);
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
      {stars}
    </div>
  );
};

export default GradientPage;
