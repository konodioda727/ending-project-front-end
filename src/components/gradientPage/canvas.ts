import React from 'react';
export const drawGradient = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const angle = 136; // CSS中的角度
  const { x: endX, y: endY } = getGradientCoordinates(
    angle,
    canvas.width,
    canvas.height
  );
  const gradient = ctx.createLinearGradient(0, 0, endX, endY);

  for (let i = 0; i < 5; i += 1) {
    const flag = i % 2;
    const colorStop = i / 5.0;
    if (flag) {
      gradient.addColorStop(colorStop, '#B56CFF');
      continue;
    }
    gradient.addColorStop(colorStop, '#F17272');
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
function degreesToRadians(degrees: number) {
  return ((degrees - 90) * Math.PI) / 180;
}

function getGradientCoordinates(angle: number, width: number, height: number) {
  const radians = degreesToRadians(angle);
  const x = Math.cos(radians) * width;
  const y = Math.sin(radians) * height;
  return { x, y };
}
