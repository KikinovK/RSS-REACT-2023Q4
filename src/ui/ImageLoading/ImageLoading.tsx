import { Component, HTMLAttributes } from 'react';

import './ImageLoading.scss';
import Loading from '../../components/Loading/Loading';

interface IImageLoadingState {
  isLoaded: boolean;
}

interface IImageLoadingProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

class ImageLoading extends Component<IImageLoadingProps, IImageLoadingState> {
  constructor(props: IImageLoadingProps) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  handleImageLoad = () => {
    this.setState({ isLoaded: true });
  };

  render = () => {
    const { src, alt, ...restProps } = this.props;
    return (
      <>
        {this.state.isLoaded ? <img src={src} alt={alt} {...restProps} /> : <Loading />}
        {!this.state.isLoaded && (
          <img src={src} alt={alt} style={{ display: 'none' }} onLoad={this.handleImageLoad} />
        )}
      </>
    );
  };
}

export default ImageLoading;
