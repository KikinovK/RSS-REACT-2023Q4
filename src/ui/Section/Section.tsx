import { FC } from 'react';

import { IUIComponent } from '../../types/interface';

import './Section.scss';

const Section: FC<IUIComponent> = ({ classNames, children, ...restProps }) => {
  const classes = ['section', ...(classNames || [])].join(' ');
  return (
    <section className={classes} {...restProps}>
      <div className="section__in">{children}</div>
    </section>
  );
};

export default Section;
