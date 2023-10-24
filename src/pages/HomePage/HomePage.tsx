import { Component } from 'react';
import Search from '../../components/Search/Search';
import Section from '../../ui/Section/Section';

class HomePage extends Component {
  getSearchQuery = (query: string) => {
    console.log('query', query);
  };

  render = () => (
    <>
      <Section>
        <Search onInputQuery={this.getSearchQuery} />
      </Section>
      <Section classNames={['section--full_height']}>
        <div>List</div>
      </Section>
    </>
  );
}

export default HomePage;
