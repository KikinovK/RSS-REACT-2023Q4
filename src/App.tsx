import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { SearchQueryProvider } from './components/SearchQueryProvider/SearchQueryProvider';
import router from './routes/router';

import './App.scss';
import { DataProvider } from './components/DataProvider/DataProvider';

const App: FC = () => (
  <SearchQueryProvider>
    <DataProvider>
      <RouterProvider router={router} />;
    </DataProvider>
  </SearchQueryProvider>
);

export default App;
