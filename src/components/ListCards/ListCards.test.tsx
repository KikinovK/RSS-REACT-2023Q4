import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ListCards from './ListCards';
import mosk from '../../test/mosk';

const mocks = vi.hoisted(() => {
  return {
    useData: vi.fn(),
  };
});

vi.mock('../DataProvider/DataProvider', () => {
  return {
    useData: mocks.useData,
  };
});

describe('ListCards Component', () => {
  it('renders the specified number of cards', () => {
    const { data } = mosk;

    mocks.useData.mockReturnValue({ data });

    render(<ListCards onClickItem={() => {}} />);

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(data.items.length);
  });

  it('displays a message if no cards are present', () => {
    const data = {
      items: [],
    };

    mocks.useData.mockReturnValue({ data });

    render(<ListCards onClickItem={() => {}} />);

    const message = screen.getByText('No results...');
    expect(message).toBeInTheDocument();
  });

  it('displays a message if error serve', () => {
    const data = null;

    mocks.useData.mockReturnValue({ data });

    render(<ListCards onClickItem={() => {}} />);

    const message = screen.getByText('server`s error, try again later');
    expect(message).toBeInTheDocument();
  });

  it('calls onClickItem with the right argument when an item is clicked', () => {
    const { data } = mosk;

    mocks.useData.mockReturnValue({ data });

    const onClickItem = vi.fn();
    const { getAllByRole } = render(<ListCards onClickItem={onClickItem} />);

    const listItems = getAllByRole('listitem');
    fireEvent.click(listItems[0]);

    expect(onClickItem).toHaveBeenCalledWith(1);
  });
});
