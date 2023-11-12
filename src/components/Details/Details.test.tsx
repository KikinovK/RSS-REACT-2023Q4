import { fireEvent, render, screen } from '@testing-library/react';
import Details from './Details';
import mockData from '../../test/mockData';
import { vi } from 'vitest';
import formattedDate from '../../utils/formattedDate';

vi.mock('../../ui/ImageLoading/ImageLoading', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

const mocks = vi.hoisted(() => {
  return {
    useData: vi.fn(),
    useSearchParams: vi.fn(),
  };
});

vi.mock('../DataProvider/DataProvider', () => {
  return {
    useData: mocks.useData,
  };
});

vi.mock('react-router-dom', () => {
  return {
    useSearchParams: mocks.useSearchParams,
  };
});

it('displays the correct detailed card data', async () => {
  const { data } = mockData;

  mocks.useData.mockReturnValue({ data });
  mocks.useSearchParams.mockReturnValue([new URLSearchParams('details=1'), vi.fn()]);

  const item = mockData.data.items[0];

  render(<Details />);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', item.links[0].href.replace('thumb', 'medium'));
  expect(image).toHaveAttribute('alt', item.data[0].title);

  expect(screen.getByText(item.data[0].title)).toBeInTheDocument();
  expect(screen.getByText(`Photographer: ${item.data[0].photographer}`)).toBeInTheDocument();
  expect(screen.getByText(item.data[0].description)).toBeInTheDocument();
  expect(screen.getByText(`Date: ${formattedDate(item.data[0].date_created)}`)).toBeInTheDocument();
});

it('Close button hides the Details component', () => {
  const { data } = mockData;

  const setSearchParams = vi.fn();
  const searchParams = new URLSearchParams('details=1');

  mocks.useData.mockReturnValue({ data });
  mocks.useSearchParams.mockReturnValue([searchParams, setSearchParams]);

  const { getByRole } = render(<Details />);
  const closeButton = getByRole('button', { name: /close/i });

  fireEvent.click(closeButton);

  expect(setSearchParams).toHaveBeenCalled();
});

it('Details component does not render when numItem is null', () => {
  const { data } = mockData;

  const setSearchParams = vi.fn();
  const searchParams = new URLSearchParams();

  mocks.useData.mockReturnValue({ data });
  mocks.useSearchParams.mockReturnValue([searchParams, setSearchParams]);

  const { queryByTestId } = render(<Details />);
  const detailsComponent = queryByTestId('details-component');

  expect(detailsComponent).toBeNull();
});

it('Loading component renders when data is null', () => {
  const data = null;

  const setSearchParams = vi.fn();
  const searchParams = new URLSearchParams('details=1');

  mocks.useData.mockReturnValue({ data });
  mocks.useSearchParams.mockReturnValue([searchParams, setSearchParams]);

  const { getByRole } = render(<Details />);
  const loadingComponent = getByRole('status', { name: 'loading' });

  expect(loadingComponent).toBeInTheDocument();
});
