import { render, screen } from '@testing-library/react';
import Button from './Button';

it('renders Button component without classNames', () => {
  render(<Button>Test Button</Button>);

  const buttonElement = screen.getByRole('button', { name: /Test Button/i });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('btn');
});
