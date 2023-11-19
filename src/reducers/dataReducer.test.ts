import { setData, default as dataReducer } from '../reducers/dataReducer';
import mockData from '../test/mockData';

describe('dataReducer', () => {
  it('should handle setData action', () => {
    const initialState = { data: null };
    const newData = mockData.data;
    const state = dataReducer(initialState, setData(newData));

    expect(state.data).toEqual(newData);
  });
});
