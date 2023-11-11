import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IReturnData } from '../../services/getItems';

interface DataContextProps {
  data: IReturnData | null;
  setData: React.Dispatch<React.SetStateAction<IReturnData | null>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

interface IDataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<IDataProviderProps> = ({ children }: IDataProviderProps) => {
  const [data, setData] = useState<IReturnData | null>(null);

  const value: DataContextProps = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
