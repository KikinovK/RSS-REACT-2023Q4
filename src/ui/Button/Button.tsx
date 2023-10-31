import { FC } from 'react';

import { IUIComponent } from '../../types/interface';

import './Button.scss';

const Button: FC<IUIComponent> = ({ classNames, children, onClick, ...restProps }) => {
  const classes = ['btn', ...(classNames || [])].join(' ');
  return (
    <button type="button" className={classes} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
