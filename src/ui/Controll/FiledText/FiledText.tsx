import { FC, InputHTMLAttributes, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import Filed from '../Filed/Filed';
import { FormData } from './../../../validation/schema';

import './FiledText.scss';

interface IFiledTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof FormData;
  type?: string;
  id: string;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  register: UseFormRegister<FormData>;
}

const FiledText: FC<IFiledTextProps> = ({
  name,
  id,
  label = '',
  type,
  isError = false,
  errorMessage,
  register,
  ...restProps
}) => {
  const [isFocused, setFocus] = useState(false);
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    const registeredOnBlur = register(name).onBlur;
    if (registeredOnBlur) {
      registeredOnBlur(e);
    }
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <Filed
      id={id}
      label={label}
      isChildrenFocused={isFocused}
      isError={isError}
      errorMessage={errorMessage}
    >
      <input
        id={id}
        type={type || 'text'}
        className="filed__input"
        onFocus={handleFocus}
        {...restProps}
        {...register(name)}
        onBlur={handleBlur}
      />
    </Filed>
  );
};

export default FiledText;
