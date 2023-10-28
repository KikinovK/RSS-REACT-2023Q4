import { Component } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
import './App.scss';
class App extends Component {
  render = () => <RouterProvider router={router} />;
}

export default App;
