import { HTMLAttributes, ReactNode } from 'react';

export interface UIComponent extends HTMLAttributes<HTMLElement> {
  classNames?: string[];
  children?: ReactNode;
}

export interface paramApiType {
  key: string;
  value: number | string;
}
