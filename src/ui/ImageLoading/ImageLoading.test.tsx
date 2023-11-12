import { render, fireEvent } from '@testing-library/react';
import ImageLoading from './ImageLoading';
import mockData from '../../test/mockData';

it('sets isLoaded to true when the image is loaded', () => {
  const { getByAltText } = render(
    <ImageLoading src={mockData.testImage.src.thumb} alt="Test image" />
  );

  const hiddenImage = getByAltText('loading image');
  fireEvent.load(hiddenImage);

  const visibleImage = getByAltText('Test image');
  expect(visibleImage).toHaveAttribute('src', mockData.testImage.src.thumb);
});
