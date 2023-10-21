import { Component } from 'react';
import Search from '../../components/Search/Search';
import Section from '../../components/Section/Section';

class HomePage extends Component {
  render = () => (
    <>
      <Section>
        <Search />
      </Section>
      <Section classNames={['section--full-height']}>
        <div>List</div>
      </Section>
    </>
  );
}

export default HomePage;
