import { FC } from 'react';

import './Loading.scss';

const Loading: FC = () => (
  <div className="loading">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loading;
