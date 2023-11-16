import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { DataProvider } from './components/DataProvider/DataProvider';
import router from './routes/router';
import store from './store/store';

import './App.scss';

const App: FC = () => (
  <DataProvider>
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  </DataProvider>
);

export default App;
