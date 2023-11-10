export const setSearchQueryToLocalStorage = (query: string): void => {
  localStorage.setItem('searchQuery', query);
};

export const getSearchQueryFromLocalStorage = (): string => {
  return localStorage.getItem('searchQuery') || '';
};
