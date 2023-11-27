import { createBrowserRouter } from 'react-router-dom';

import PrimaryLayout from '../layouts/PrimaryLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPage from '../pages/MainPage/MainPage';
import UnControllFormPage from '../pages/UnControllFormPage/UnControllFormPage';
import ControllFormPage from '../pages/ControllFormPage/ControllFormPage';

const router = createBrowserRouter([
  {
    element: <PrimaryLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/uncontrollform',
        element: <UnControllFormPage />,
      },
      {
        path: '/controllform',
        element: <ControllFormPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
