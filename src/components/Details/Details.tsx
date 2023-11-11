import { FC } from 'react';
import Button from '../../ui/Button/Button';
import CloseIcon from './../../assets/close.svg?react';
import ImageLoading from '../../ui/ImageLoading/ImageLoading';

import './Details.scss';
import { useData } from '../DataProvider/DataProvider';
import { useSearchParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

interface IDetailsProps {}

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

const Details: FC<IDetailsProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useData();

  const handleClose = () => {
    setSearchParams((prevSearchParams) => {
      searchParams.delete('details');
      return prevSearchParams;
    });
  };

  const numItem = parseInt(searchParams.get('details') ?? '', 10) || null;

  if (!numItem) {
    return null;
  }

  if (data === null) {
    return <Loading />;
  }

  const { items } = data;
  const item = items[numItem - 1];

  return (
    <div className="details">
      <div className="details__pic">
        <ImageLoading
          src={item.links[0].href.replace('thumb', 'medium')}
          alt={item.data[0].title}
          className="details__image"
        />
      </div>
      <h3 className="details__title">{item.data[0].title}</h3>
      {item.data[0].photographer && <h4>Photographer: {item.data[0].photographer}</h4>}
      <h5>Date: {formattedDate(item.data[0].date_created)}</h5>
      <p>{item.data[0].description}</p>
      <Button classNames={['details__close']} onClick={handleClose}>
        <CloseIcon />
      </Button>
    </div>
  );
};

export default Details;
