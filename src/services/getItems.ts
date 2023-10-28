import { paramApiType } from '../types/interface';

export interface IItemData {
  data: {
    date_created: string;
    description: string;
    photographer: string;
    title: string;
  }[];
  href: string;
  links: {
    href: string;
    rel: string;
    render: string;
  }[];
}

interface IData {
  collection: {
    items: IItemData[];
  };
}

const baseUrl = 'https://images-api.nasa.gov';
const generateQueryString = (queryParam: paramApiType[] = []) =>
  queryParam.length ? `?${queryParam.map((elem) => `${elem.key}=${elem.value}`).join('&')}` : '';

const fetchData = async (apiQuery: paramApiType[]): Promise<IItemData[] | null> => {
  try {
    const response = await fetch(`${baseUrl}/search${generateQueryString(apiQuery)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: IData = await response.json();
    return data.collection.items;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default fetchData;
