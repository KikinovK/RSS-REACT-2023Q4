import { createBrowserRouter } from 'react-router-dom';

import HomePage, { loader } from '../pages/HomePage/HomePage';
import PrimaryLayout from '../layouts/PrimaryLayout';

const router = createBrowserRouter([
  {
    element: <PrimaryLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:lineQuery',
        element: <HomePage />,
        loader: loader,
      },
    ],
  },
]);

export default router;
