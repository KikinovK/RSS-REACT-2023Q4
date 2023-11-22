import { paramApiType } from '../types/interface';
import generateQueryString from './generateQueryString';

it('should generate a query string for a single paramApiType element', () => {
  const queryParam = [{ key: 'key1', value: 'value1' }];
  const expectedResult = 'key1=value1';

  const result = generateQueryString(queryParam);

  expect(result).toEqual(expectedResult);
});

it('should generate a query string for multiple paramApiType elements', () => {
  const queryParam = [
    { key: 'key1', value: 'value1' },
    { key: 'key2', value: 42 },
    { key: 'key3', value: 'abc' },
  ];
  const expectedResult = 'key1=value1&key2=42&key3=abc';

  const result = generateQueryString(queryParam);

  expect(result).toEqual(expectedResult);
});

it('should return an empty string for an empty queryParam array', () => {
  const queryParam: paramApiType[] = [];
  const expectedResult = '';

  const result = generateQueryString(queryParam);

  expect(result).toEqual(expectedResult);
});
