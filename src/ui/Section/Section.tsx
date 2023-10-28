import { Component } from 'react';

import { IUIComponent } from '../../types/interface';

import './Section.scss';

class Section extends Component<IUIComponent> {
  render = () => {
    const classes = ['section', ...(this.props.classNames || [])].join(' ');
    return (
      <section className={classes}>
        <div className="section__in">{this.props.children}</div>
      </section>
    );
  };
}

export default Section;
