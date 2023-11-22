import parseQueryString from './parseQueryString';

it('should parse a single query parameter correctly', () => {
  const queryString = 'key1=value1';
  const expectedResult = [{ key: 'key1', value: 'value1' }];

  const result = parseQueryString(queryString);

  expect(result).toEqual(expectedResult);
});

it('should parse multiple query parameters correctly', () => {
  const queryString = 'key1=value1&key2=value2&key3=3';
  const expectedResult = [
    { key: 'key1', value: 'value1' },
    { key: 'key2', value: 'value2' },
    { key: 'key3', value: 3 },
  ];

  const result = parseQueryString(queryString);

  expect(result).toEqual(expectedResult);
});

it('should handle numeric values correctly', () => {
  const queryString = 'key1=42&key2=abc';
  const expectedResult = [
    { key: 'key1', value: 42 },
    { key: 'key2', value: 'abc' },
  ];

  const result = parseQueryString(queryString);

  expect(result).toEqual(expectedResult);
});
