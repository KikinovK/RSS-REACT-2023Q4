import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Vite + React heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/count is 0/i);

  fireEvent.click(buttonElement);

  expect(getByText(/count is 1/i)).toBeInTheDocument();
});
