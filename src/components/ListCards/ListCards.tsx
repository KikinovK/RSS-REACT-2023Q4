import { Component, HTMLAttributes } from 'react';

import './ListCards.scss';
import { IItemData } from '../../services/getItems';
import Card from '../Card/Card';

export type TListCardData = IItemData[] | null | [];

interface IListCardsState {
  inputValue: string;
}

interface IListCardsProps extends HTMLAttributes<HTMLElement> {
  data: TListCardData;
}

class ListCards extends Component<IListCardsProps, IListCardsState> {
  render = () => {
    const { data } = this.props;

    if (data?.length === 0) {
      return <div>Loading...</div>;
    }

    if (data === null) {
      return <div>server's error</div>;
    }

    return (
      <ul className="list_card">
        {data.map((item) => (
          <li className="list_card__item" key={item.href}>
            <Card dataItem={item} />
          </li>
        ))}
      </ul>
    );
  };
}

export default ListCards;
