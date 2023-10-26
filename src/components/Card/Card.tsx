import { Component, HTMLAttributes } from 'react';
import { IItemData } from '../../services/getItems';

import './Card.scss';

interface ICardsProps extends HTMLAttributes<HTMLElement> {
  dataItem: IItemData;
}

class Card extends Component<ICardsProps> {
  render = () => {
    const { dataItem } = this.props;
    return (
      <div className="card">
        <div className="card__pic">
          <img src={dataItem.links[0].href} alt={dataItem.data[0].title} className="card__img" />
        </div>
        <div className="card__title">{dataItem.data[0].title}</div>
      </div>
    );
  };
}

export default Card;
