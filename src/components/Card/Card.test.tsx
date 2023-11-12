import { render, screen } from '@testing-library/react';
import Card from './Card';
import mockData from '../../test/mockData';
import { vi } from 'vitest';

vi.mock('../../ui/ImageLoading/ImageLoading', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

it('displays the correct card data', async () => {
  const item = mockData.data.items[0];

  render(<Card dataItem={item} />);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', item.links[0].href);
  expect(image).toHaveAttribute('alt', item.data[0].title);

  const title = screen.getByText(item.data[0].title);
  expect(title).toBeInTheDocument();
});
