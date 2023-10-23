import { Component } from 'react';

import { UIComponent } from '../../types/interface';

import './Section.scss';

class Section extends Component<UIComponent> {
  render = () => {
    const sectionClass = ['section', ...(this.props.classNames || [])].join(' ');
    return (
      <section className={sectionClass}>
        <div className="section__in">{this.props.children}</div>
      </section>
    );
  };
}

export default Section;
