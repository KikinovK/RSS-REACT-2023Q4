import { Component } from 'react';

import { IUIComponent } from '../../types/interface';

import './Button.scss';

interface ButtonProps extends IUIComponent {
  onClick: () => void;
}

class Button extends Component<ButtonProps> {
  render = () => {
    const classes = ['btn', ...(this.props.classNames || [])].join(' ');
    return (
      <button type="button" className={classes} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  };
}

export default Button;
