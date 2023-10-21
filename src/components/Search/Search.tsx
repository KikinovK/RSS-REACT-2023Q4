import { Component } from 'react';

import './Search.scss';

class Search extends Component {
  render = () => (
    <div className="search">
      <input className="search__input" type="text" />
      <button className="search__button"></button>
    </div>
  );
}

export default Search;
