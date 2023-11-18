import { HTMLAttributes } from 'react';

export interface IUIComponent extends HTMLAttributes<HTMLElement> {
  classNames?: string[];
}

export interface paramApiType {
  key: string;
  value: number | string;
}

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

export interface IData {
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
