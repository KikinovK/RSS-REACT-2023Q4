import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from './Search';

const mockStore = configureStore([]);

it('saves input value to store on button click', () => {
  const store = mockStore({
    search: {
      searchQuery: '',
    },
  });

  const { getByRole } = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  const input = getByRole('textbox');
  const button = getByRole('button');

  fireEvent.change(input, { target: { value: 'test query' } });
  fireEvent.click(button);

  const actions = store.getActions();
  expect(actions[0]).toEqual({ type: 'search/setSearchQuery', payload: 'test query' });
});
