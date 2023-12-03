import { FC, SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormData } from './../../../validation/schema';

import './CheckBox.scss';

interface ICheckBoxProps extends SelectHTMLAttributes<HTMLInputElement> {
  name: keyof FormData;
  classNames?: string[];
  label?: string;
  id: string;
  isError?: boolean;
  errorMessage?: string;
  register: UseFormRegister<FormData>;
}

const CheckBox: FC<ICheckBoxProps> = ({
  name,
  classNames,
  label,
  id,
  isError = false,
  errorMessage,
  register,
  ...restProps
}) => {
  const classes = ['checkbox', ...(classNames || [])].join(' ');
  return (
    <div className={classes}>
      <input
        type="checkbox"
        id={id}
        className="checkbox__input"
        {...register(name)}
        {...restProps}
      />
      <label
        htmlFor={id}
        className={`checkBox__marker ${isError && 'filed__wr--error'}`}
      ></label>
      <span className="checkbox__label">{label}</span>
      <span className={`filed__error ${isError && 'filed__error--on'}`}>
        {errorMessage}
      </span>
    </div>
  );
};

export default CheckBox;
