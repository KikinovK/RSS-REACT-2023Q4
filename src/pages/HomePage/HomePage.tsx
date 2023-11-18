import { useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../../components/Search/Search';
import ListCards from '../../components/ListCards/ListCards';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import Pagination from '../../components/Pagination/Pagination';
import Section from '../../ui/Section/Section';

import parseQueryString from '../../utils/parseQueryString';
import generateQueryString from '../../utils/generateQueryString';
import generateApiQuery from '../../utils/generateApiQuery';
import filterQueryParams from '../../utils/filterQueryParams';
import constants from '../../constants/constants';
import { TRootState } from '../../store/store';
import { setSearchQuery } from '../../reducers/searchReducer';
import { setData } from '../../reducers/dataReducer';

import './HomePage.scss';
import { useGetItemsQuery } from '../../reducers/itemsApi';

export interface ILoaderParams {
  lineQuery: string;
}

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetItemsQuery(
    filterQueryParams(searchParams, constants.KEYS_PARAM).toString()
  );
  const navigate = useNavigate();
  const searchQuery = useSelector((state: TRootState) => state.search.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
  }, [data]);

  useEffect(() => {
    if (!searchParams.size) {
      const apiQuery = generateApiQuery({ q: searchQuery });
      navigate(`/?${generateQueryString(apiQuery)}`);
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('q');

    if (query && query != searchQuery) {
      dispatch(setSearchQuery(query));
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.size) {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.set('q', searchQuery);
        return filterQueryParams(prevSearchParams, constants.KEYS_PARAM);
      });
    }
  }, [searchQuery]);

  const handleClickCard = (numItem: number = 0) => {
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('details', numItem.toString());
      return prevSearchParams;
    });
  };

  return (
    <>
      <Section>
        <Search />
      </Section>
      <Section classNames={['section--full_height']}>
        <div className="row">
          <div className="col col--full_width">
            <ListCards onClickItem={handleClickCard} />
          </div>
          <div className="col col--min_width">
            <Outlet />
          </div>
        </div>
        {data && searchParams.size && (
          <Pagination
            apiQuery={parseQueryString(
              filterQueryParams(searchParams, constants.KEYS_PARAM).toString()
            )}
          />
        )}
      </Section>
      <ErrorButton />
    </>
  );
};

export default HomePage;
