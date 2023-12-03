import React, { OptionHTMLAttributes } from 'react';

export interface IOption extends OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

const Option: React.FC<IOption> = ({ value, label, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
};

export default Option;
