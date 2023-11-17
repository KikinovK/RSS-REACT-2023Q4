import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IReturnData } from '../services/getItems';

interface IDataState {
  data: IReturnData | null;
}

const initialState: IDataState = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IReturnData | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
