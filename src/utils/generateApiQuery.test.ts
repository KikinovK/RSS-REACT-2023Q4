import generateApiQuery from './generateApiQuery';
import constants from '../constants/constants';

it('should generate default query parameters when no params are provided', () => {
  const expectedDefaultParams = [
    { key: 'q', value: '*' },
    { key: 'media_type', value: 'image' },
    { key: 'page_size', value: constants.PAGE_SIZE },
    { key: 'page', value: 1 },
  ];

  const result = generateApiQuery({});

  expect(result).toEqual(expectedDefaultParams);
});

it('should generate query parameters based on provided params', () => {
  const customParams = {
    q: 'cats',
    media_type: 'video',
    page_size: 10,
    page: 2,
  };

  const expectedParams = [
    { key: 'q', value: 'cats' },
    { key: 'media_type', value: 'video' },
    { key: 'page_size', value: 10 },
    { key: 'page', value: 2 },
  ];

  const result = generateApiQuery(customParams);

  expect(result).toEqual(expectedParams);
});

it('should use default values for missing params', () => {
  const partialParams = {
    q: 'dogs',
  };

  const expectedParams = [
    { key: 'q', value: 'dogs' },
    { key: 'media_type', value: 'image' },
    { key: 'page_size', value: constants.PAGE_SIZE },
    { key: 'page', value: 1 },
  ];

  const result = generateApiQuery(partialParams);

  expect(result).toEqual(expectedParams);
});
