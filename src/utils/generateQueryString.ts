import { paramApiType } from '../types/interface';

const generateQueryString = (queryParam: paramApiType[] = []) =>
  queryParam.length ? `${queryParam.map((elem) => `${elem.key}=${elem.value}`).join('&')}` : '';

export default generateQueryString;
