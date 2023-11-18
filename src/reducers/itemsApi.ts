import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import constants from '../constants/constants';
import { IData } from '../types/interface';

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
  }),
});

export const { useGetItemsQuery } = itemsApi;

export default itemsApi;
