import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrimaryLayout from './PrimaryLayout';

test('renders without crashing', () => {
  render(
    <Router>
      <PrimaryLayout />
    </Router>
  );
});
