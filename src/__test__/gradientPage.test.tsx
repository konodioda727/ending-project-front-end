import { render, screen } from '@testing-library/react';
import GradientPage from '../components/gradientPage/index.tsx';
import { it } from 'vitest';
import '@testing-library/jest-dom';

it('background', () => {
  render(<GradientPage />);
  const gradientElement = screen.getByTestId('gradient-background');
  expect(gradientElement).toBeInTheDocument();
});
