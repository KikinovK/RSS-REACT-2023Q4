import { createBrowserRouter } from 'react-router-dom';

import PrimaryLayout from '../layouts/PrimaryLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPage from '../pages/MainPage/MainPage';
import UnControllFormPage from '../pages/UnControllFormPage/UnControllFormPage';
import ControllFormPage from '../pages/ControllFormPage/ControllFormPage';
import constants from '../constants/constants';

const router = createBrowserRouter([
  {
    element: <PrimaryLayout />,
    children: [
      {
        path: constants.PATH.MAIN,
        element: <MainPage />,
      },
      {
        path: constants.PATH.UNCONTROL,
        element: <UnControllFormPage />,
      },
      {
        path: constants.PATH.CONTROL,
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
