import { FC, InputHTMLAttributes } from 'react';

import Filed from '../Filed/Filed';

import './FiledText.scss';

interface IFiledTextProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: React.RefObject<HTMLInputElement>;
  errorMessageRef: React.RefObject<HTMLElement>;
  wrapRef: React.RefObject<HTMLDivElement>;
  name: string;
  type?: string;
  id: string;
  label?: string;
}

const FiledText: FC<IFiledTextProps> = ({
  inputRef,
  name,
  id,
  label = '',
  type,
  errorMessageRef,
  wrapRef,
  ...restProps
}) => {
  const handleFocus = () => {
    wrapRef.current?.classList.add('filed__wr--focus');
  };

  const handleBlur = () => {
    wrapRef.current?.classList.remove('filed__wr--focus');
  };

  return (
    <Filed
      id={id}
      label={label}
      errorMessageRef={errorMessageRef}
      wrapRef={wrapRef}
    >
      <input
        ref={inputRef}
        name={name}
        id={id}
        type={type || 'text'}
        className="filed__input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
    </Filed>
  );
};

export default FiledText;
