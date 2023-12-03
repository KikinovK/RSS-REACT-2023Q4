import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect } from 'react';

import Card from '../Card/Card';

import { setLength } from '../../reducers/lengthDataRedecer';
import { TRootState } from '../../store/store';
import './ListCard.scss';

interface IListCardProps {}

const ListCard: FC<IListCardProps> = () => {
  const dispatch = useDispatch();
  const dataCards = useSelector((state: TRootState) => state.data.data);

  const lengthDataCards = useSelector(
    (state: TRootState) => state.lengthData.data
  );
  const newCountCard = dataCards.length - lengthDataCards;

  useEffect(() => {
    return () => {
      dispatch(setLength(dataCards.length));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="card__list">
      {dataCards.map((card, index) => (
        <li className="card__item" key={index + 1}>
          <Card dataCard={card} isNew={index <= newCountCard - 1} />
        </li>
      ))}
    </ul>
  );
};

export default ListCard;
