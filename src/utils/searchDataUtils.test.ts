// Пример использования Jest для тестирования функции, работающей с localStorage

import { vi } from 'vitest';
import { getSearchQueryFromLocalStorage, setSearchQueryToLocalStorage } from './searchDataUtils';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('getSearchQueryFromLocalStorage', () => {
  it('should return an empty string if there is no search query in localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce(null);

    const result = getSearchQueryFromLocalStorage();

    expect(result).toBe('');
    expect(localStorageMock.getItem).toHaveBeenCalledWith('searchQuery');
  });

  it('should return the search query from localStorage', () => {
    const mockSearchQuery = 'your-search-query';

    localStorageMock.getItem.mockReturnValueOnce(mockSearchQuery);

    const result = getSearchQueryFromLocalStorage();

    expect(result).toBe(mockSearchQuery);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('searchQuery');
  });
});

describe('setSearchQueryToLocalStorage', () => {
  it('should set the search query to localStorage', () => {
    const query = 'your-search-query';
    setSearchQueryToLocalStorage(query);

    expect(localStorageMock.setItem).toHaveBeenCalledWith('searchQuery', query);
  });
});
