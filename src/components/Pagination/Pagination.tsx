import { FC } from 'react';
import { Link } from 'react-router-dom';

import PrevIcon from './../../assets/prev.svg?react';
import NextIcon from './../../assets/next.svg?react';
import { paramApiType } from '../../types/interface';
import generateQueryString from '../../utils/generateQueryString';

import './Pagination.scss';

interface IPaginationProps {
  totalPages: number;
  apiQuery: paramApiType[];
}

const changeValueToApiQuery = (
  newValue: number | string,
  keyName: string,
  apiQuery: paramApiType[]
) => apiQuery.map((item) => (item.key === keyName ? { ...item, value: newValue } : item));

const getPathLink = (numberPage: number, apiQuery: paramApiType[]): string =>
  `/?${generateQueryString(changeValueToApiQuery(numberPage, 'page', apiQuery))}`;

const Pagination: FC<IPaginationProps> = ({ totalPages, apiQuery }) => {
  const currentPage = apiQuery.filter((item) => item.key === 'page')[0].value as number;

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
            className={`paging__link ${currentPage >= totalPages ? 'paging__link--disabled' : ''}`}
          >
            <NextIcon className="paging__icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
