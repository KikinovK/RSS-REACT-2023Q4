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
    useSelector: vi.fn(),
    useSearchParams: vi.fn(),
    useGetDetailQuery: vi.fn(),
  };
});

vi.mock('react-redux', () => {
  return {
    useSelector: mocks.useSelector,
  };
});

vi.mock('react-router-dom', () => {
  return {
    useSearchParams: mocks.useSearchParams,
  };
});

vi.mock('../../reducers/itemsApi', () => {
  return {
    useGetDetailQuery: mocks.useGetDetailQuery,
  };
});

it('Displays the correct detailed card data', async () => {
  const { data, details } = mockData;

  mocks.useSelector.mockReturnValue({ ...data });
  mocks.useSearchParams.mockReturnValue([new URLSearchParams('details=1'), vi.fn()]);
  mocks.useGetDetailQuery.mockReturnValue({ ...details });

  const item = mockData.data.items[0];

  render(<Details />);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute(
    'src',
    details.data.items.filter((item) => item.href.includes('~medium'))[0]?.href ||
      item.links[0].href
  );
  expect(image).toHaveAttribute('alt', item.data[0].title);

  expect(screen.getByText(item.data[0].title)).toBeInTheDocument();
  expect(screen.getByText(`Photographer: ${item.data[0].photographer}`)).toBeInTheDocument();
  expect(screen.getByText(item.data[0].description)).toBeInTheDocument();
  expect(screen.getByText(`Date: ${formattedDate(item.data[0].date_created)}`)).toBeInTheDocument();
});

it('Close button hides the Details component', () => {
  const { data, details } = mockData;

  const setSearchParams = vi.fn();
  const searchParams = new URLSearchParams('details=1');

  mocks.useSelector.mockReturnValue({ ...data });
  mocks.useSearchParams.mockReturnValue([searchParams, setSearchParams]);
  mocks.useGetDetailQuery.mockReturnValue({ ...details });

  const { getByRole } = render(<Details />);
  const closeButton = getByRole('button', { name: /close/i });

  fireEvent.click(closeButton);

  expect(setSearchParams).toHaveBeenCalled();
});

it('Details component does not render when numItem is null', () => {
  const { data, details } = mockData;

  const setSearchParams = vi.fn();
  const searchParams = new URLSearchParams();

  mocks.useSelector.mockReturnValue({ data });
  mocks.useSearchParams.mockReturnValue([searchParams, setSearchParams]);
  mocks.useGetDetailQuery.mockReturnValue({ details });

  const { queryByTestId } = render(<Details />);
  const detailsComponent = queryByTestId('details-component');

  expect(detailsComponent).toBeNull();
});

it('Loading component renders when data is null', () => {
  const data = null;
  const { details } = mockData;

  const setSearchParams = vi.fn();
  const searchParams = new URLSearchParams('details=1');

  mocks.useSelector.mockReturnValue({ data });
  mocks.useSearchParams.mockReturnValue([searchParams, setSearchParams]);
  mocks.useGetDetailQuery.mockReturnValue({ details });

  const { getByRole } = render(<Details />);
  const loadingComponent = getByRole('status', { name: 'loading' });

  expect(loadingComponent).toBeInTheDocument();
});
