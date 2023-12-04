import { FC, SelectHTMLAttributes } from 'react';

import './CheckBox.scss';

interface ICheckBoxProps extends SelectHTMLAttributes<HTMLInputElement> {
  inputRef: React.RefObject<HTMLInputElement>;
  errorMessageRef: React.RefObject<HTMLElement>;
  wrapRef?: React.RefObject<HTMLLabelElement>;
  classNames?: string[];
  label?: string;
  id: string;
}

const CheckBox: FC<ICheckBoxProps> = ({
  inputRef,
  errorMessageRef,
  wrapRef,
  classNames,
  label,
  id,
  ...restProps
}) => {
  const classes = ['checkbox', ...(classNames || [])].join(' ');
  return (
    <div className={classes}>
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        className="checkbox__input"
        {...restProps}
      />
      <label ref={wrapRef} htmlFor={id} className="checkBox__marker"></label>
      <span className="checkbox__label">{label}</span>
      <span ref={errorMessageRef} className={`filed__error`}></span>
    </div>
  );
};

export default CheckBox;
