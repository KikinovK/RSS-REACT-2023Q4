import { FC } from 'react';
import { IItemData } from '../../services/getItems';

import './Card.scss';
import ImageLoading from '../../ui/ImageLoading/ImageLoading';

interface ICardsProps {
  dataItem: IItemData;
}

const Card: FC<ICardsProps> = ({ dataItem }) => (
  <div className="card">
    <div className="card__pic">
      <ImageLoading
        src={dataItem.links[0].href}
        alt={dataItem.data[0].title}
        className="card__img"
      />
    </div>
    <div className="card__title">{dataItem.data[0].title}</div>
  </div>
);

export default Card;
