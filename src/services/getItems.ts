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
    metadata: {
      total_hits: number;
    };
  };
}

export interface IReturnData {
  items: IItemData[];
  totalHits: number;
}

const baseUrl = 'https://images-api.nasa.gov';

const fetchData = async (apiQuery: string): Promise<IReturnData | null> => {
  try {
    const response = await fetch(`${baseUrl}/search?${apiQuery}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: IData = await response.json();
    return {
      items: data.collection.items,
      totalHits: data.collection.metadata.total_hits,
    };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default fetchData;
