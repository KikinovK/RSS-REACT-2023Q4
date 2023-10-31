import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const PrimaryLayout: FC = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);

export default PrimaryLayout;
