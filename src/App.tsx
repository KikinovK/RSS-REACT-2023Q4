import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { SearchQueryProvider } from './components/SearchQueryProvider/SearchQueryProvider';
import router from './routes/router';

import './App.scss';

const App: FC = () => (
  <SearchQueryProvider>
    <RouterProvider router={router} />;
  </SearchQueryProvider>
);

export default App;
