import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';
import dataReducer from '../reducers/dataReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  data: dataReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
