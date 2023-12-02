import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../reducers/dataReducer';

const rootReducer = combineReducers({
  data: dataReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
