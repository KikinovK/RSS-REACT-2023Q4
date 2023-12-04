import { FC, SelectHTMLAttributes, useRef, useState } from 'react';

import Option, { IOption } from './Option';
import ArrowDown from './../../../assets/arrow_down.svg?react';
import { FormData } from './../../../validation/schema';

import './Select.scss';
import { UseFormRegister } from 'react-hook-form';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: keyof FormData;
  classNames?: string[];
  options: IOption[];
  register: UseFormRegister<FormData>;
}

const Select: FC<ISelectProps> = ({
  name,
  classNames,
  options,
  onFocus: externalOnFocus,
  onBlur: externalOnBlur,
  register,
  ...restProps
}) => {
  const [isActive, setIsActive] = useState(false);
  const classes = ['select', ...(classNames || [])].join(' ');
  const refButton = useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const registeredOnChange = register(name).onChange;

    setIsActive(false);
    if (registeredOnChange) {
      registeredOnChange(event);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
    setIsActive(true);
    externalOnFocus && externalOnFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    const registeredOnBlur = register(name).onBlur;

    setIsActive(false);
    externalOnBlur && externalOnBlur(event);
    if (registeredOnBlur) {
      registeredOnBlur(event);
    }
  };

  return (
    <div className="select__wrap">
      <select
        onFocus={handleFocus}
        className={classes}
        {...restProps}
        {...register(name)}
        onBlur={handleBlur}
        onChange={handleChange}
      >
        <Option value="" label="" />
        {options.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
      <span
        ref={refButton}
        className={`select__icon ${isActive ? 'select__icon--up' : ''}`}
      >
        <ArrowDown />
      </span>
    </div>
  );
};

export default Select;
