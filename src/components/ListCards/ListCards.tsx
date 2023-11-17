import { FC } from 'react';
import { useSelector } from 'react-redux';

import { IItemData } from '../../services/getItems';
import Card from '../Card/Card';

import { TRootState } from '../../store/store';

import './ListCards.scss';

export type TListCardData = IItemData[] | null | undefined;

interface IListCardsProps {
  onClickItem: (numItem: number) => void;
}

const ListCards: FC<IListCardsProps> = ({ onClickItem }) => {
  const data = useSelector((state: TRootState) => state.data.data);

  if (data === null) {
    return (
      <div>
        <h1>server`s error, try again later</h1>
      </div>
    );
  }

  const { items } = data;

  if (items?.length === 0) {
    return (
      <div>
        <h1>No results...</h1>
      </div>
    );
  }

  return (
    <ul className="list_card">
      {items.map((item, index) => (
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
