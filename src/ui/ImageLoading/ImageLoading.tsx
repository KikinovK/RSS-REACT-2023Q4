import { FC, HTMLAttributes, useState } from 'react';

import './ImageLoading.scss';
import Loading from '../../components/Loading/Loading';

interface IImageLoadingProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const ImageLoading: FC<IImageLoadingProps> = ({ src, alt, ...restProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {isLoaded ? <img src={src} alt={alt} {...restProps} /> : <Loading />}
      {!isLoaded && (
        <img src={src} alt="loading image" style={{ display: 'none' }} onLoad={handleImageLoad} />
      )}
    </>
  );
};

export default ImageLoading;
