import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
