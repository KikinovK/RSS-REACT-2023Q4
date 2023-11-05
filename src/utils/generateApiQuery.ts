import constants from '../constants/constants';
import { paramApiType } from '../types/interface';

interface Params {
  q?: string;
  media_type?: string;
  page_size?: number;
  page?: number;
}

const generateApiQuery = (params: Params): paramApiType[] => {
  const defaultParams = {
    q: '*',
    media_type: 'image',
    page_size: constants.PAGE_SIZE,
    page: 1,
  };

  const finalParams = { ...defaultParams, ...params };

  return Object.entries(finalParams).map(([key, value]) => ({ key, value }));
};

export default generateApiQuery;
