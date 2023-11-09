import { ChangeEvent, FC, SelectHTMLAttributes, useState } from 'react';

import Option, { IOption } from './Option';
import ArrowDown from './../../assets/arrow_down.svg?react';

import './Select.scss';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  classNames?: string[];
  value?: string;
  onSelected: (value: string) => void;
  options: IOption[];
}

const Select: FC<ISelectProps> = ({ classNames, value, onSelected, options, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const classes = ['select', ...(classNames || [])].join(' ');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setIsOpen(false);
    setIsChange(true);
    onSelected(event.target.value);
  };

  const handleClick = () => {
    if (isChange) setIsChange(false);
    if (!isChange) setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="select__wrap">
      <select
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        onBlur={handleBlur}
        className={classes}
        {...restProps}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value} label={option.label} />
        ))}
      </select>
      <span className={`select__icon${isOpen ? ' select__icon--up' : ''}`}>
        <ArrowDown />
      </span>
    </div>
  );
};

export default Select;
