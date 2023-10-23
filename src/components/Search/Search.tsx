import { Component } from 'react';

import Button from '../../ui/Button/Button';
import SearchIcon from './../../assets/search.svg?react';

import './Search.scss';

class Search extends Component {
  hendlerClickButton = () => {
    console.log('Search click');
  };

  render = () => (
    <div className="search">
      <input className="search__input" type="text" />
      <Button classNames={['search__button']} onClick={this.hendlerClickButton}>
        <SearchIcon className="search__icon" />
      </Button>
    </div>
  );
}

export default Search;
