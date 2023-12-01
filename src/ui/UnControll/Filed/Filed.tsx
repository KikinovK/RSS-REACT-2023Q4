import { FC, ReactNode } from 'react';

import './Filed.scss';

interface IFiledProps {
  label?: string;
  id?: string;
  errorMessageRef: React.RefObject<HTMLElement>;
  wrapRef: React.RefObject<HTMLDivElement>;
  children?: ReactNode;
}

const Filed: FC<IFiledProps> = ({
  label,
  id,
  errorMessageRef,
  wrapRef,
  children,
}) => {
  return (
    <div className="filed">
      <label htmlFor={id} className="filed__label">
        {label}
      </label>
      <div ref={wrapRef} className="filed__wr">
        {children}
      </div>
      <span ref={errorMessageRef} className={`filed__error`}></span>
    </div>
  );
};

export default Filed;
