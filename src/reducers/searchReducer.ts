import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  getSearchQueryFromLocalStorage,
  setSearchQueryToLocalStorage,
} from '../utils/searchDataUtils';

interface ISearchState {
  searchQuery: string;
}

const initialState: ISearchState = {
  searchQuery: getSearchQueryFromLocalStorage(),
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      setSearchQueryToLocalStorage(action.payload);
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
