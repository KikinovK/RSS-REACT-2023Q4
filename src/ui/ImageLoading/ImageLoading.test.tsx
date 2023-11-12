import { render, fireEvent } from '@testing-library/react';
import ImageLoading from './ImageLoading';
import mosk from '../../test/mosk';

it('sets isLoaded to true when the image is loaded', () => {
  const { getByAltText } = render(<ImageLoading src={mosk.testImage.src.thumb} alt="Test image" />);

  const hiddenImage = getByAltText('loading image');
  fireEvent.load(hiddenImage);

  const visibleImage = getByAltText('Test image');
  expect(visibleImage).toHaveAttribute('src', mosk.testImage.src.thumb);
});
