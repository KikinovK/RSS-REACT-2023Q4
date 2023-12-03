import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducers/dataReducer';
import lengthDataRedecer from '../reducers/lengthDataRedecer';

const rootReducer = combineReducers({
  data: dataReducer,
  lengthData: lengthDataRedecer,
});

export type TRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
