import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Details from '../components/Details/Details';

const router = createBrowserRouter([
  {
    element: <PrimaryLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            index: true,
            element: <Details />,
          },
        ],
      },
    ],
  },
]);

export default router;
