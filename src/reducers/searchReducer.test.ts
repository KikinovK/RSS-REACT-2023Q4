import { vi } from 'vitest';
import { setSearchQuery, default as searchReducer } from './searchReducer';

describe('searchReducer', () => {
  beforeEach(() => {
    Storage.prototype.setItem = vi.fn();
    Storage.prototype.getItem = vi.fn();
  });

  it('should handle setSearchQuery action', () => {
    const initialState = { searchQuery: '' };
    const state = searchReducer(initialState, setSearchQuery('test'));

    expect(state.searchQuery).toEqual('test');
    expect(localStorage.setItem).toHaveBeenCalledWith('searchQuery', 'test');
  });
});
