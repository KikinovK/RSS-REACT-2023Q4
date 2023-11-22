import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

it('renders without crashing', () => {
  render(<ErrorBoundary />);
});

const ChildComponent = () => {
  throw new Error('Test error');
};

test('catches error and displays error message', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <ChildComponent />
    </ErrorBoundary>
  );

  expect(getByText('Something went wrong.')).toBeInTheDocument();
});
