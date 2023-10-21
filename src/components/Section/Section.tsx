import { Component, ReactNode } from 'react';
import './Section.scss';

interface SectionProps {
  classNames?: string[];
  children: ReactNode;
}

class Section extends Component<SectionProps> {
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
