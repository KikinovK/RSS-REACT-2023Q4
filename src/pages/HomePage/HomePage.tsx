import { useEffect } from 'react';
import Search from '../../components/Search/Search';
import Section from '../../ui/Section/Section';
import fetchData, { IReturnData } from '../../services/getItems';
import ListCards from '../../components/ListCards/ListCards';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import { LoaderFunctionArgs, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchQuery } from '../../utils/searchDataUtils';
import parseQueryString from '../../utils/parseQueryString';
import generateQueryString from '../../utils/generateQueryString';
import generateApiQuery from '../../utils/generateApiQuery';
import Pagination from '../../components/Pagination/Pagination';
import constants from '../../constants/constants';
import filterQueryParams from '../../utils/filterQueryParams';
import Details from '../../components/Details/Details';

import './HomePage.scss';

export interface ILoaderParams {
  lineQuery: string;
}

export const loader = async (args: LoaderFunctionArgs): Promise<IReturnData | null> => {
  const url = new URL(args.request.url);
  if (url.search) {
    const apiQuery = filterQueryParams(url.searchParams, constants.KEYS_PARAM);
    const data = await fetchData(apiQuery);
    return data;
  }
  return null;
};

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataLoad = useLoaderData() as IReturnData | null;
  const navigate = useNavigate();

  const numItem = parseInt(searchParams.get('details') ?? '', 10) || null;

  const changeQuery = async (query: string) => {
    const apiQuery = generateApiQuery({ q: query });
    navigate(`/?${generateQueryString(apiQuery)}`);
  };

  const getFirstValue = (): string => searchParams.get('q') || getSearchQuery();

  useEffect(() => {
    if (!searchParams.size) {
      const query = getSearchQuery();
      const apiQuery = generateApiQuery({ q: query });
      navigate(`/?${generateQueryString(apiQuery)}`);
    }
  }, []);

  const handleClickCard = (numItem: number = 0) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    currentParams['details'] = numItem.toString();
    setSearchParams(currentParams);
  };

  const closeDetails = () => {
    searchParams.delete('details');
    setSearchParams(searchParams);
  };

  return (
    <>
      <Section>
        <Search onInputQuery={changeQuery} firstValue={getFirstValue()} />
      </Section>
      <Section classNames={['section--full_height']}>
        <div className="row">
          <div className="col col--full_width">
            <ListCards data={dataLoad?.items} onClickItem={handleClickCard} />
          </div>
          {dataLoad && numItem && (
            <div className="col">
              <Details data={dataLoad.items[numItem - 1]} onClose={closeDetails} />
            </div>
          )}
        </div>
        {dataLoad && searchParams.size && (
          <Pagination
            totalPages={Math.ceil(dataLoad.totalHits / constants.PAGE_SIZE)}
            apiQuery={parseQueryString(filterQueryParams(searchParams, constants.KEYS_PARAM))}
          />
        )}
      </Section>
      <ErrorButton />
    </>
  );
};

export default HomePage;
