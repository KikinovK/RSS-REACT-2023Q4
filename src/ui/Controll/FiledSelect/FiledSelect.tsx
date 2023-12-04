import { FC, InputHTMLAttributes, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import Filed from '../Filed/Filed';
import Select from '../Select/Select';
import { IOption } from '../Select/Option';
import { FormData } from './../../../validation/schema';

import './FiledSelect.scss';

interface IFiledSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: IOption[];
  name: keyof FormData;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  register: UseFormRegister<FormData>;
}

const FiledSelect: FC<IFiledSelectProps> = ({
  name,
  options,
  label = '',
  register,
  isError,
  errorMessage,
  ...restProps
}) => {
  const [isFocused, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <Filed
      label={label}
      isChildrenFocused={isFocused}
      isError={isError}
      errorMessage={errorMessage}
    >
      <Select
        name={name}
        options={options}
        onFocus={handleFocus}
        onBlur={handleBlur}
        register={register}
        {...restProps}
      />
    </Filed>
  );
};

export default FiledSelect;
