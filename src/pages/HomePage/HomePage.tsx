import { Component } from 'react';
import Search from '../../components/Search/Search';
import Section from '../../ui/Section/Section';
import fetchData from '../../services/getItems';
import { paramApiType } from '../../types/interface';
import ListCards, { TListCardData } from '../../components/ListCards/ListCards';
import ErrorButton from '../../components/ErrorButton/ErrorButton';

interface IHomePageState {
  dataItems: TListCardData;
}

class HomePage extends Component<object, IHomePageState> {
  private apiQuery: paramApiType[];

  constructor(props: object) {
    super(props);
    this.apiQuery = [];
    this.state = {
      dataItems: [],
    };
  }

  loadData = async (query: string) => {
    this.setState({ dataItems: [] });
    this.apiQuery = [
      { key: 'q', value: query ? query : '*' },
      { key: 'media_type', value: 'image' },
      { key: 'page_size', value: 12 },
      { key: 'page', value: 1 },
    ];
    const data = await fetchData(this.apiQuery);
    this.setState({ dataItems: data });
  };

  render = () => (
    <>
      <Section>
        <Search onInputQuery={this.loadData} />
      </Section>
      <Section classNames={['section--full_height']}>
        <ListCards data={this.state.dataItems} />
      </Section>
      <ErrorButton />
    </>
  );
}

export default HomePage;
