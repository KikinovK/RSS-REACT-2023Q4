import { FC, SelectHTMLAttributes, useRef } from 'react';

import Option, { IOption } from './Option';
import ArrowDown from './../../../assets/arrow_down.svg?react';

import './Select.scss';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectRef?: React.RefObject<HTMLSelectElement>;
  classNames?: string[];
  options: IOption[];
}

const Select: FC<ISelectProps> = ({
  selectRef,
  classNames,
  options,
  onFocus: externalOnFocus,
  onBlur: externalOnBlur,
  ...restProps
}) => {
  const classes = ['select', ...(classNames || [])].join(' ');
  const refButton = useRef<HTMLButtonElement>(null);

  const arrowUp = () => {
    if (refButton.current) {
      refButton.current.classList.add('select__icon--up');
    }
  };

  const arrowDown = () => {
    if (refButton.current) {
      refButton.current.classList.remove('select__icon--up');
    }
  };

  const handleChange = () => {
    arrowDown();
    console.log('handleChange');
  };

  const handleFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
    arrowUp();
    externalOnFocus && externalOnFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    arrowDown();
    externalOnBlur && externalOnBlur(event);
  };

  return (
    <div className="select__wrap">
      <select
        ref={selectRef}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={classes}
        {...restProps}
      >
        <Option value="" label="" />
        {options.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
      <span ref={refButton} className="select__icon">
        <ArrowDown />
      </span>
    </div>
  );
};

export default Select;
