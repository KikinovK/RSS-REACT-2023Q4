import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IData } from '../types/interface';

interface IDataState {
  data: IData[];
}

const initialState: IDataState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<IData>) => {
      state.data.unshift(action.payload);
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
