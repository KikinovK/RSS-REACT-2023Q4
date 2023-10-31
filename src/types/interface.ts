import { HTMLAttributes } from 'react';

export interface IUIComponent extends HTMLAttributes<HTMLElement> {
  classNames?: string[];
}

export interface paramApiType {
  key: string;
  value: number | string;
}
