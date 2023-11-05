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
  const [searchParams] = useSearchParams();
  const dataLoad = useLoaderData() as IReturnData | null;
  const navigate = useNavigate();

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

  return (
    <>
      <Section>
        <Search onInputQuery={changeQuery} firstValue={getFirstValue()} />
      </Section>
      <Section classNames={['section--full_height']}>
        <ListCards data={dataLoad?.items} />
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
