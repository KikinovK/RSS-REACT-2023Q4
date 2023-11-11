import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ListCards from './ListCards';

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
    const data = {
      items: [
        {
          href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-004/collection.json',
          data: [
            {
              center: 'ARC',
              title: 'ARC-2012-ACD12-0026-004',
              photographer: 'Eric James',
              keywords: ['N-232', 'Sustainability Base', 'Aerial'],
              nasa_id: 'ARC-2012-ACD12-0026-004',
              media_type: 'image',
              date_created: '2012-02-03T15:51:15Z',
              description:
                'Aerial view of newly completed N-232 Sustainability Base at the NASA Ames Research Center, Moffett Field, CA.',
            },
          ],
          links: [
            {
              href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-004/ARC-2012-ACD12-0026-004~thumb.jpg',
              rel: 'preview',
              render: 'image',
            },
          ],
        },
        {
          href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-006/collection.json',
          data: [
            {
              center: 'ARC',
              title: 'ARC-2012-ACD12-0026-006',
              photographer: 'Eric James',
              keywords: ['N-232', 'Sustainability Base', 'Aerial'],
              nasa_id: 'ARC-2012-ACD12-0026-006',
              media_type: 'image',
              date_created: '2012-02-03T15:51:38Z',
              description:
                'Aerial view of newly completed N-232 Sustainability Base at the NASA Ames Research Center, Moffett Field, CA.',
            },
          ],
          links: [
            {
              href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-006/ARC-2012-ACD12-0026-006~thumb.jpg',
              rel: 'preview',
              render: 'image',
            },
          ],
        },
        {
          href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-008/collection.json',
          data: [
            {
              center: 'ARC',
              title: 'ARC-2012-ACD12-0026-008',
              photographer: 'Eric James',
              keywords: ['N-232', 'Sustainability Base', 'Aerial'],
              nasa_id: 'ARC-2012-ACD12-0026-008',
              media_type: 'image',
              date_created: '2012-02-03T15:51:55Z',
              description:
                'Aerial view of newly completed N-232 Sustainability Base at the NASA Ames Research Center, Moffett Field, CA.',
            },
          ],
          links: [
            {
              href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-008/ARC-2012-ACD12-0026-008~thumb.jpg',
              rel: 'preview',
              render: 'image',
            },
          ],
        },
        {
          href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-009/collection.json',
          data: [
            {
              center: 'ARC',
              title: 'ARC-2012-ACD12-0026-009',
              photographer: 'Eric James',
              keywords: ['N-232', 'Sustainability Base', 'Aerial'],
              nasa_id: 'ARC-2012-ACD12-0026-009',
              media_type: 'image',
              date_created: '2012-02-03T15:51:14Z',
              description:
                'Aerial view of newly completed N-232 Sustainability Base at the NASA Ames Research Center, Moffett Field, CA.',
            },
          ],
          links: [
            {
              href: 'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-009/ARC-2012-ACD12-0026-009~thumb.jpg',
              rel: 'preview',
              render: 'image',
            },
          ],
        },
      ],
      totalHits: 200,
    };

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
});
