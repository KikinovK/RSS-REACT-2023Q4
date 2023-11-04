import { paramApiType } from '../types/interface';

const parseQueryString = (queryString: string): paramApiType[] => {
  const params = queryString.split('&');
  const result: paramApiType[] = [];

  params.forEach((param) => {
    const [key, value] = param.split('=');
    const parsedValue = isNaN(Number(value)) ? value : Number(value);
    result.push({ key, value: parsedValue });
  });

  return result;
};

export default parseQueryString;
