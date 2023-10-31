import { useState } from 'react';
import Search from '../../components/Search/Search';
import Section from '../../ui/Section/Section';
import fetchData from '../../services/getItems';
import { paramApiType } from '../../types/interface';
import ListCards, { TListCardData } from '../../components/ListCards/ListCards';
import ErrorButton from '../../components/ErrorButton/ErrorButton';

const HomePage = () => {
  const [dataItems, setDataItems] = useState<TListCardData>(undefined);

  const loadData = async (query: string) => {
    setDataItems(undefined);
    const apiQuery: paramApiType[] = [
      { key: 'q', value: query ? query : '*' },
      { key: 'media_type', value: 'image' },
      { key: 'page_size', value: 12 },
      { key: 'page', value: 1 },
    ];
    const data = await fetchData(apiQuery);
    setDataItems(data);
  };

  return (
    <>
      <Section>
        <Search onInputQuery={loadData} />
      </Section>
      <Section classNames={['section--full_height']}>
        <ListCards data={dataItems} />
      </Section>
      <ErrorButton />
    </>
  );
};

export default HomePage;
