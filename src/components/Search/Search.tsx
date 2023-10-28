import { ChangeEvent, Component, HTMLAttributes } from 'react';

import Button from '../../ui/Button/Button';
import SearchIcon from './../../assets/search.svg?react';
import { getSearchQuery, setSearchQuery } from '../../utils/searchDataUtils';

import './Search.scss';

interface ISearchState {
  inputValue: string;
}

interface ISearchProps extends HTMLAttributes<HTMLElement> {
  onInputQuery: (query: string) => void;
}

class Search extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount = () => {
    this.setState({ inputValue: getSearchQuery() }, () => {
      this.props.onInputQuery(this.state.inputValue);
    });
  };

  hendleClickButton = () => {
    setSearchQuery(this.state.inputValue);
    this.props.onInputQuery(this.state.inputValue);
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  render = () => (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={this.state.inputValue}
        onChange={this.handleChange}
      />
      <Button classNames={['search__button']} onClick={this.hendleClickButton}>
        <SearchIcon className="search__icon" />
      </Button>
    </div>
  );
}

export default Search;
