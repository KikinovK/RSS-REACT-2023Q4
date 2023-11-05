import { useEffect } from 'react';
import Search from '../../components/Search/Search';
import Section from '../../ui/Section/Section';
import fetchData, { IReturnData } from '../../services/getItems';
import ListCards from '../../components/ListCards/ListCards';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import { LoaderFunctionArgs, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { getSearchQuery } from '../../utils/searchDataUtils';
import parseQueryString from '../../utils/parseQueryString';
import generateQueryString from '../../utils/generateQueryString';
import generateApiQuery from '../../utils/generateApiQuery';
import Pagination from '../../components/Pagination/Pagination';
import constants from '../../constants/constants';

export interface ILoaderParams {
  lineQuery: string;
}

export const loader = async (
  args: LoaderFunctionArgs<ILoaderParams>
): Promise<IReturnData | null> => {
  const { lineQuery } = args.params;
  if (lineQuery) {
    const apiQuery = parseQueryString(lineQuery);
    const data = await fetchData(apiQuery);
    return data;
  }
  return null;
};

const HomePage = () => {
  const { lineQuery } = useParams();
  const dataLoad = useLoaderData() as IReturnData | null;
  const navigate = useNavigate();

  const changeQuery = async (query: string) => {
    const apiQuery = generateApiQuery({ q: query });
    navigate(`/${generateQueryString(apiQuery)}`);
  };

  const getFirstValue = (): string => {
    if (lineQuery) {
      const apiQuery = parseQueryString(lineQuery);
      return apiQuery.filter((item) => item.key === 'q')[0].value.toString();
    }
    return getSearchQuery();
  };

  useEffect(() => {
    if (!lineQuery) {
      const query = getSearchQuery();
      const apiQuery = generateApiQuery({ q: query });
      navigate(`/${generateQueryString(apiQuery)}`);
    }
  }, []);

  return (
    <>
      <Section>
        <Search onInputQuery={changeQuery} firstValue={getFirstValue()} />
      </Section>
      <Section classNames={['section--full_height']}>
        <ListCards data={dataLoad?.items} />
        {dataLoad && lineQuery && (
          <Pagination
            totalPages={Math.ceil(dataLoad.totalHits / constants.PAGE_SIZE)}
            apiQuery={parseQueryString(lineQuery)}
          />
        )}
      </Section>
      <ErrorButton />
    </>
  );
};

export default HomePage;
