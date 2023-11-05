import { FC } from 'react';
import { IItemData } from '../../services/getItems';
import Button from '../../ui/Button/Button';
import CloseIcon from './../../assets/close.svg?react';
import ImageLoading from '../../ui/ImageLoading/ImageLoading';

import './Details.scss';

interface IDetailsProps {
  data: IItemData;
  onClose: () => void;
}

const formattedDate = (dateString: string): string => {
  const dateObject = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };

  return dateObject.toLocaleDateString('en-US', options);
};

const Details: FC<IDetailsProps> = ({ data, onClose }) => {
  return (
    <div className="details">
      <div className="details__pic">
        <ImageLoading
          src={data.links[0].href.replace('thumb', 'medium')}
          alt={data.data[0].title}
          className="details__image"
        />
      </div>
      <h3 className="details__title">{data.data[0].title}</h3>
      {data.data[0].photographer && <h4>Photographer: {data.data[0].photographer}</h4>}
      <h5>Date: {formattedDate(data.data[0].date_created)}</h5>
      <p>{data.data[0].description}</p>
      <Button classNames={['details__close']} onClick={onClose}>
        <CloseIcon />
      </Button>
    </div>
  );
};

export default Details;
