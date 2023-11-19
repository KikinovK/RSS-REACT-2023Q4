import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HomePage from './HomePage';
import mockData from '../../test/mockData';

vi.mock('../../components/ListCards/ListCards', () => ({
  __esModule: true,
  default: ({ onClickItem }: { onClickItem: (numItem: number) => void }) => {
    return (
      <div
        data-testid="ListCards"
        onClick={() => {
          onClickItem(1);
        }}
      >
        ListCards
      </div>
    );
  },
}));

vi.mock('../../components/Search/Search', () => ({
  __esModule: true,
  default: () => <div data-testid="Search" />,
}));

vi.mock('../../components/Pagination/Pagination', () => ({
  __esModule: true,
  default: () => <div data-testid="Pagination" />,
}));

vi.mock('../../components/ErrorButton/ErrorButton', () => ({
  __esModule: true,
  default: () => <div data-testid="ErrorButton" />,
}));

const mocks = vi.hoisted(() => {
  return {
    useSelector: vi.fn(),
    useSearchParams: vi.fn(),
    useGetItemsQuery: vi.fn(),
    useDispatch: vi.fn(),
    useNavigate: vi.fn(),
    MockOutlet: () => <div data-testid="Outlet" />,
  };
});

vi.mock('react-redux', () => {
  return {
    useSelector: mocks.useSelector,
    useDispatch: mocks.useDispatch,
  };
});

vi.mock('react-router-dom', () => {
  return {
    useSearchParams: mocks.useSearchParams,
    useNavigate: mocks.useNavigate,
    Outlet: mocks.MockOutlet,
  };
});

vi.mock('../../reducers/itemsApi', () => {
  return {
    useGetItemsQuery: mocks.useGetItemsQuery,
  };
});

mocks.useDispatch.mockReturnValue(() => {});
mocks.useNavigate.mockReturnValue(() => {});

const setSearchParams = vi.fn();
const searchParams = new URLSearchParams('q=2028&media_type=image&page_size=8&page=1');

mocks.useSelector.mockReturnValue('2028');
mocks.useSearchParams.mockReturnValue([searchParams, setSearchParams]);

it('renders components correctly', () => {
  const { data } = mockData;

  mocks.useGetItemsQuery.mockReturnValue({ data });

  render(<HomePage />);

  expect(screen.getByTestId('Search')).toBeInTheDocument();
  expect(screen.getByTestId('ListCards')).toBeInTheDocument();
  expect(screen.getByTestId('Outlet')).toBeInTheDocument();
  expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  expect(screen.getByTestId('ErrorButton')).toBeInTheDocument();
});

it('renders error message on error', () => {
  const { data } = mockData;

  mocks.useGetItemsQuery.mockReturnValue({ data, isError: true });

  render(<HomePage />);

  expect(screen.getByText('server`s error, try again later')).toBeInTheDocument();
});

it('Loading component renders ', () => {
  const { data } = mockData;

  mocks.useGetItemsQuery.mockReturnValue({ data, isLoading: true });

  render(<HomePage />);

  expect(screen.getByRole('status', { name: 'loading' })).toBeInTheDocument();
});
