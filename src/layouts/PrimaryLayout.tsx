import { Component } from 'react';
import { Outlet } from 'react-router-dom';

class PrimaryLayout extends Component {
  render = () => <Outlet />;
}

export default PrimaryLayout;
