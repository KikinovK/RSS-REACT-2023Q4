export const setSearchQuery = (query: string): void => {
  localStorage.setItem('searchQuery', query);
};

export const getSearchQuery = (): string => {
  return localStorage.getItem('searchQuery') || '';
};
