import { Component } from 'react';

import Button from '../../ui/Button/Button';
import ErrorIcon from './../../assets/error.svg?react';

import './ErrorButton.scss';

interface IErrorButtonState {
  isError: boolean;
}

class ErrorButton extends Component<object, IErrorButtonState> {
  constructor(props: object) {
    super(props);
    this.state = { isError: false };
  }
  hendleClickButton = () => {
    this.setState({ isError: true });
  };

  render = () => {
    if (this.state.isError) {
      throw new Error('Test error');
    }
    return (
      <Button classNames={['error__button']} onClick={this.hendleClickButton}>
        <ErrorIcon className="error__icon" />
      </Button>
    );
  };
}

export default ErrorButton;
