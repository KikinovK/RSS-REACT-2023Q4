import { setSearchQuery } from '../reducers/searchReducer';
import store from './store';

describe('store', () => {
  it('updates search state correctly when setSearchQuery is dispatched', () => {
    expect(store.getState().search.searchQuery).toEqual('');

    store.dispatch(setSearchQuery('test'));

    expect(store.getState().search.searchQuery).toEqual('test');
  });
});
