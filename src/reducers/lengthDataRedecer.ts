import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IDataState {
  data: number;
}

const initialState: IDataState = {
  data: 0,
};

const dataSlice = createSlice({
  name: 'lengthData',
  initialState,
  reducers: {
    setLength: (state, action: PayloadAction<number>) => {
      state.data = action.payload;
    },
  },
});

export const { setLength } = dataSlice.actions;
export default dataSlice.reducer;
