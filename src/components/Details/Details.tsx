import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loading from '../Loading/Loading';
import ImageLoading from '../../ui/ImageLoading/ImageLoading';
import Button from '../../ui/Button/Button';
import CloseIcon from './../../assets/close.svg?react';

import formattedDate from '../../utils/formattedDate';
import { TRootState } from '../../store/store';

import './Details.scss';
import { useGetDetailQuery } from '../../reducers/itemsApi';

interface IDetailsProps {}

const Details: FC<IDetailsProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useSelector((state: TRootState) => state.data.data);

  const numItem = parseInt(searchParams.get('details') ?? '', 10) || null;
  const detailsId =
    numItem && data && data.items.length ? data.items[numItem - 1].data[0].nasa_id : null;
  const { data: details, isLoading, isError } = useGetDetailQuery(detailsId);

  const handleClose = () => {
    searchParams.delete('details');
    setSearchParams(searchParams);
  };

  if (!numItem) {
    return null;
  }

  if (isError) {
    return (
      <div>
        <h1>server`s error, try again later</h1>
      </div>
    );
  }

  if (isLoading || !data || !details) {
    return (
      <div className="details">
        <Loading />;
      </div>
    );
  }

  const { items } = data;
  const item = items[numItem - 1];

  return (
    <div className="details">
      <div className="details__overlay" onClick={handleClose}></div>
      <div className="details__pic">
        <ImageLoading
          src={
            details.items.filter((item) => item.href.includes('~medium'))[0]?.href ||
            item.links[0].href
          }
          alt={item.data[0].title}
          className="details__image"
        />
      </div>
      <h3 className="details__title">{item.data[0].title}</h3>
      {item.data[0].photographer && <h4>Photographer: {item.data[0].photographer}</h4>}
      <h5>Date: {formattedDate(item.data[0].date_created)}</h5>
      <p>{item.data[0].description}</p>
      <Button classNames={['details__close']} onClick={handleClose} aria-label="close">
        <CloseIcon />
      </Button>
    </div>
  );
};

export default Details;
