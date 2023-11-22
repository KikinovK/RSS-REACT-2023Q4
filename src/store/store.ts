import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';
import dataReducer from '../reducers/dataReducer';
import itemsApi from '../reducers/itemsApi';

const rootReducer = combineReducers({
  search: searchReducer,
  data: dataReducer,
  [itemsApi.reducerPath]: itemsApi.reducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(itemsApi.middleware),
});

export default store;
