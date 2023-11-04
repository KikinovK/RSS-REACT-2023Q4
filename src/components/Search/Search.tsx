import { ChangeEvent, FC, HTMLAttributes, useState } from 'react';

import Button from '../../ui/Button/Button';
import SearchIcon from './../../assets/search.svg?react';
import { setSearchQuery } from '../../utils/searchDataUtils';

import './Search.scss';

interface ISearchProps extends HTMLAttributes<HTMLElement> {
  onInputQuery: (query: string) => void;
  firstValue: string;
}

const Search: FC<ISearchProps> = ({ onInputQuery, firstValue }) => {
  const [inputValue, setInputValue] = useState(firstValue);

  const hendleClickButton = () => {
    setSearchQuery(inputValue);
    onInputQuery(inputValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search">
      <input className="search__input" type="text" value={inputValue} onChange={handleChange} />
      <Button classNames={['search__button']} onClick={hendleClickButton}>
        <SearchIcon className="search__icon" />
      </Button>
    </div>
  );
};

export default Search;
