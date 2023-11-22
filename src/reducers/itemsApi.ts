import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import constants from '../constants/constants';
import { IData, IDetail } from '../types/interface';

const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }),
  endpoints: (build) => ({
    getItems: build.query({
      query: (searchParams: string) => `search?${searchParams}`,
      transformResponse: (response: IData) => {
        if (response) {
          return {
            items: response.collection.items,
            totalHits: response.collection.metadata.total_hits,
          };
        }

        return null;
      },
    }),
    getDetail: build.query({
      query: (id: string | null) => {
        if (typeof id !== 'string') {
          return '';
        }
        return `asset/${id}`;
      },
      transformResponse: (response: IDetail) => {
        if (response && 'collection' in response) {
          return {
            items: response.collection.items,
          };
        }

        return null;
      },
    }),
  }),
});

export const { useGetItemsQuery, useGetDetailQuery } = itemsApi;

export default itemsApi;
