import { render, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Pagination from './Pagination';

const mockStore = configureStore([]);

it('updates URL query parameter on page change', () => {
  const store = mockStore({
    data: {
      data: {
        totalHits: 100,
      },
    },
  });

  const { getByRole } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Pagination
          apiQuery={[
            { key: 'page', value: 1 },
            { key: 'page_size', value: 4 },
          ]}
        />
      </MemoryRouter>
    </Provider>
  );

  const linkElement = getByRole('next');
  fireEvent.click(linkElement);

  expect(linkElement.getAttribute('href')).toContain('?page=2&page_size=4');
});
