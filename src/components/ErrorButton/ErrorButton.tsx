import { FC, useState } from 'react';

import Button from '../../ui/Button/Button';
import ErrorIcon from './../../assets/error.svg?react';

import './ErrorButton.scss';

const ErrorButton: FC = () => {
  const [isError, setIsError] = useState(false);

  const hendleClickButton = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error('Test error');
  }
  return (
    <Button classNames={['error__button']} onClick={hendleClickButton}>
      <ErrorIcon className="error__icon" />
    </Button>
  );
};

export default ErrorButton;
