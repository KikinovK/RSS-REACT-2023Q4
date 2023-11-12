import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import {
  getSearchQueryFromLocalStorage,
  setSearchQueryToLocalStorage,
} from '../../utils/searchDataUtils';

interface SearchQueryContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchQueryContext = createContext<SearchQueryContextProps | undefined>(undefined);

interface ISearchQueryProviderProps {
  children: ReactNode;
}

export const SearchQueryProvider: React.FC<ISearchQueryProviderProps> = ({
  children,
}: ISearchQueryProviderProps) => {
  const [searchQuery, setSearchQuery] = useState(() => {
    return getSearchQueryFromLocalStorage();
  });

  useEffect(() => {
    setSearchQueryToLocalStorage(searchQuery);
  }, [searchQuery]);

  const value: SearchQueryContextProps = {
    searchQuery,
    setSearchQuery,
  };

  return <SearchQueryContext.Provider value={value}>{children}</SearchQueryContext.Provider>;
};

export const useSearchQuery = (): SearchQueryContextProps => {
  const context = useContext(SearchQueryContext);
  if (!context) {
    throw new Error('useSearchQuery must be used within a SearchQueryProvider');
  }
  return context;
};
