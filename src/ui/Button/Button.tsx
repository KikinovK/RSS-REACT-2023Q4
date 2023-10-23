import { Component } from 'react';

import { UIComponent } from '../../types/interface';

import './Button.scss';

interface ButtonProps extends UIComponent {
  onClick: () => void;
}

class Button extends Component<ButtonProps> {
  render = () => {
    const sectionClass = ['btn', ...(this.props.classNames || [])].join(' ');
    return (
      <button type="button" className={sectionClass} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  };
}

export default Button;
