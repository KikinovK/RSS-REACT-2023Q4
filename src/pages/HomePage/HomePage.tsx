import { useEffect } from 'react';
import {
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../../components/Search/Search';
import ListCards from '../../components/ListCards/ListCards';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import Pagination from '../../components/Pagination/Pagination';
import { useData } from '../../components/DataProvider/DataProvider';
import Section from '../../ui/Section/Section';
import fetchData, { IReturnData } from '../../services/getItems';
import parseQueryString from '../../utils/parseQueryString';
import generateQueryString from '../../utils/generateQueryString';
import generateApiQuery from '../../utils/generateApiQuery';
import filterQueryParams from '../../utils/filterQueryParams';
import constants from '../../constants/constants';
import { TRootState } from '../../store/store';
import { setSearchQuery } from '../../reducers/searchReducer';

import './HomePage.scss';

export interface ILoaderParams {
  lineQuery: string;
}

export const loader = async (args: LoaderFunctionArgs): Promise<IReturnData | null> => {
  const url = new URL(args.request.url);
  if (url.search) {
    const apiQuery = filterQueryParams(url.searchParams, constants.KEYS_PARAM).toString();
    const data = await fetchData(apiQuery);
    return data;
  }
  return null;
};

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataLoad = useLoaderData() as IReturnData | null;
  const { setData } = useData();
  const navigate = useNavigate();
  const searchQuery = useSelector((state: TRootState) => state.search.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(dataLoad);
  }, [dataLoad]);

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
        {dataLoad && searchParams.size && (
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
