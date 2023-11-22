const mockData = {
  data: {
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
  },
  testImage: {
    src: {
      thumb:
        'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-006/ARC-2012-ACD12-0026-006~thumb.jpg',
      medium:
        'https://images-assets.nasa.gov/image/ARC-2012-ACD12-0026-006/ARC-2012-ACD12-0026-006~medium.jpg',
    },
  },
  details: {
    status: 'fulfilled',
    endpointName: 'getDetail',
    requestId: 'UmY2U3ofj5fDtdltKE95W',
    originalArgs: 'KSC-2011-2028',
    startedTimeStamp: 1700351781849,
    data: {
      items: [
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~orig.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~large.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~medium.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~small.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~thumb.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/metadata.json',
        },
      ],
    },
    fulfilledTimeStamp: 1700351782662,
    isUninitialized: false,
    isLoading: false,
    isSuccess: true,
    isError: false,
    currentData: {
      items: [
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~orig.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~large.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~medium.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~small.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/KSC-2011-2028~thumb.jpg',
        },
        {
          href: 'http://images-assets.nasa.gov/image/KSC-2011-2028/metadata.json',
        },
      ],
    },
    isFetching: false,
  },
};

export default mockData;
