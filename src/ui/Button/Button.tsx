import { ButtonHTMLAttributes, FC } from 'react';

import './Button.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string[];
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

const Button: FC<IButtonProps> = ({
  classNames,
  buttonRef,
  children,
  ...restProps
}) => {
  const classes = ['btn', ...(classNames || [])].join(' ');
  return (
    <button ref={buttonRef} className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
