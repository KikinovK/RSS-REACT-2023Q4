import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import PrevIcon from './../../assets/prev.svg?react';
import NextIcon from './../../assets/next.svg?react';
import { paramApiType } from '../../types/interface';
import generateQueryString from '../../utils/generateQueryString';

import './Pagination.scss';
import Select from '../../ui/Select/Select';
import { useData } from '../DataProvider/DataProvider';

interface IPaginationProps {
  apiQuery: paramApiType[];
}

const changeValueToApiQuery = (
  newValue: number | string,
  keyName: string,
  apiQuery: paramApiType[]
) => apiQuery.map((item) => (item.key === keyName ? { ...item, value: newValue } : item));

const getPathLink = (numberPage: number, apiQuery: paramApiType[]): string =>
  `/?${generateQueryString(changeValueToApiQuery(numberPage, 'page', apiQuery))}`;

const Pagination: FC<IPaginationProps> = ({ apiQuery }) => {
  const { data } = useData();
  const navigate = useNavigate();

  const currentPage = (apiQuery.filter((item) => item.key === 'page')[0]?.value as number) || 1;
  const sizePage = (apiQuery.filter((item) => item.key === 'page_size')[0]?.value as number) || 4;

  const handleSelected = (sizePage: string) => {
    const apiQueryFirstPage = changeValueToApiQuery(1, 'page', apiQuery);
    navigate(
      `/?${generateQueryString(changeValueToApiQuery(sizePage, 'page_size', apiQueryFirstPage))}`
    );
  };

  if (data) {
    const totalPages = Math.ceil(data.totalHits / sizePage);

    if (currentPage > totalPages && currentPage < 1) {
      return null;
    }

    return (
      <div className="paging">
        <ul className="paging__list">
          <li className="paging__item">
            <Link
              to={getPathLink(currentPage - 1, apiQuery)}
              className={`paging__link ${currentPage <= 1 ? 'paging__link--disabled' : ''}`}
            >
              <PrevIcon className="paging__icon" />
            </Link>
          </li>
          <li className="paging__item">
            <span className="paging__info">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>
          </li>
          <li className="paging__item">
            <Link
              to={getPathLink(currentPage + 1, apiQuery)}
              className={`paging__link ${
                currentPage >= totalPages ? 'paging__link--disabled' : ''
              }`}
            >
              <NextIcon className="paging__icon" />
            </Link>
          </li>
          <li className="paging__item">
            <Select
              defaultValue={`${
                apiQuery.filter((item) => item.key === 'page_size')[0]?.value || sizePage
              }`}
              classNames={['paging__size_page']}
              onSelected={handleSelected}
              options={[
                { label: '4', value: '4' },
                { label: '8', value: '8' },
                { label: '12', value: '12' },
              ]}
            />
          </li>
        </ul>
      </div>
    );
  }
  return null;
};

export default Pagination;
