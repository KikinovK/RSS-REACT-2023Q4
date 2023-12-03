import { HTMLAttributes } from 'react';

export interface IUIComponent extends HTMLAttributes<HTMLElement> {
  classNames?: string[];
}

export interface IData {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: 'male' | 'female';
  accept: boolean;
}

export interface IFormValues {
  name: string;
  age: string;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  accept: boolean;
}
