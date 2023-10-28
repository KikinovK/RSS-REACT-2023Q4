import { Component } from 'react';
import { Outlet } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class PrimaryLayout extends Component {
  render = () => (
    <ErrorBoundary>
      <Outlet />;
    </ErrorBoundary>
  );
}

export default PrimaryLayout;
