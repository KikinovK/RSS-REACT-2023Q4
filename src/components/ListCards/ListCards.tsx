import { FC } from 'react';

import { IItemData } from '../../services/getItems';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

import './ListCards.scss';

export type TListCardData = IItemData[] | null | undefined;

interface IListCardsProps {
  data: TListCardData;
  onClickItem: (numItem: number) => void;
}

const ListCards: FC<IListCardsProps> = ({ data, onClickItem }) => {
  if (data?.length === 0) {
    return (
      <div>
        <h1>No results...</h1>
      </div>
    );
  }

  if (data === undefined) {
    return <Loading />;
  }

  if (data === null) {
    return (
      <div>
        <h1>server's error, try again later</h1>
      </div>
    );
  }

  return (
    <ul className="list_card">
      {data.map((item, index) => (
        <li
          className="list_card__item"
          key={item.href}
          onClick={() => {
            onClickItem(index + 1);
          }}
        >
          <Card dataItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default ListCards;
