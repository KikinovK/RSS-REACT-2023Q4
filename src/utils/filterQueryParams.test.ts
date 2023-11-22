import filterQueryParams from './filterQueryParams';

it('should filter query params based on provided keys', () => {
  const params = new URLSearchParams();
  params.append('q', 'dogs');
  params.append('media_type', 'image');
  params.append('page_size', '10');

  const keys = ['q', 'page_size'];
  const expectedResult = new URLSearchParams();
  expectedResult.append('q', 'dogs');
  expectedResult.append('page_size', '10');

  const result = filterQueryParams(params, keys);

  expect(result.toString()).toEqual(expectedResult.toString());
});

it('should return an empty URLSearchParams if no matching keys are provided', () => {
  const params = new URLSearchParams();
  params.append('q', 'dogs');
  params.append('media_type', 'image');
  params.append('page_size', '10');

  const keys = ['category', 'limit'];
  const expectedResult = new URLSearchParams();

  const result = filterQueryParams(params, keys);

  expect(result.toString()).toEqual(expectedResult.toString());
});

it('should handle empty params object gracefully', () => {
  const params = new URLSearchParams();
  const keys = ['q', 'page_size'];
  const expectedResult = new URLSearchParams();

  const result = filterQueryParams(params, keys);

  expect(result.toString()).toEqual(expectedResult.toString());
});
