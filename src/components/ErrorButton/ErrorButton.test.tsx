import { render, fireEvent } from '@testing-library/react';
import ErrorButton from './ErrorButton';
import { vi } from 'vitest';

it('renders without crashing', () => {
  render(<ErrorButton />);
});

it('throws error on button click', () => {
  const { getByRole } = render(<ErrorButton />);
  const button = getByRole('button');

  console.error = vi.fn();

  try {
    fireEvent.click(button);
  } catch (error) {
    console.error(error);
  }

  expect(console.error).toHaveBeenCalled();
});
