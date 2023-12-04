import { FC } from 'react';

import { IData } from '../../types/interface';
import './Card.scss';

interface ICardProps {
  dataCard: IData;
  isNew?: boolean;
}

const Card: FC<ICardProps> = ({ dataCard, isNew = false }) => {
  return (
    <div className={`card ${isNew ? 'card--new' : ''}`}>
      {Object.keys(dataCard).map((key) => {
        if (typeof dataCard[key as keyof IData] === 'string') {
          return (
            <div className="card__row" key={key}>
              <div className="card__caption">{key.toUpperCase()}</div>
              <div className="card__info">{dataCard[key as keyof IData]}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
