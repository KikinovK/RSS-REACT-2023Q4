import { FC, ReactNode } from 'react';

import './Filed.scss';

interface IFiledProps {
  label?: string;
  id?: string;
  isError?: boolean;
  errorMessage?: string;
  children?: ReactNode;
  isChildrenFocused?: boolean;
}

const Filed: FC<IFiledProps> = ({
  label,
  id,
  isError = false,
  errorMessage,
  children,
  isChildrenFocused,
}) => {
  return (
    <div className="filed">
      <label htmlFor={id} className="filed__label">
        {label}
      </label>
      <div
        className={`filed__wr ${isError && 'filed__wr--error'} ${
          isChildrenFocused && 'filed__wr--focus'
        }`}
      >
        {children}
      </div>
      <span className={`filed__error ${isError && 'filed__error--on'}`}>
        {errorMessage}
      </span>
    </div>
  );
};

export default Filed;
