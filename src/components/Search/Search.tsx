import { ChangeEvent, FC, HTMLAttributes, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button/Button';
import SearchIcon from './../../assets/search.svg?react';

import { TRootState } from '../../store/store';
import { setSearchQuery } from '../../reducers/searchReducer';

import './Search.scss';

interface ISearchProps extends HTMLAttributes<HTMLElement> {}

const Search: FC<ISearchProps> = () => {
  const searchQuery = useSelector((state: TRootState) => state.search.searchQuery);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const hendleClickButton = () => {
    dispatch(setSearchQuery(inputValue));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

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
