import { FC, InputHTMLAttributes } from 'react';

import Filed from '../Filed/Filed';

import './FiledSelect.scss';
import Select from '../Select/Select';
import { IOption } from '../Select/Option';

interface IFiledSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  selectRef: React.RefObject<HTMLSelectElement>;
  options: IOption[];
  errorMessageRef: React.RefObject<HTMLElement>;
  wrapRef: React.RefObject<HTMLDivElement>;
  name: string;
  label?: string;
}

const FiledSelect: FC<IFiledSelectProps> = ({
  selectRef,
  options,
  label = '',
  errorMessageRef,
  wrapRef,
  ...restProps
}) => {
  const handleFocus = () => {
    wrapRef.current?.classList.add('filed__wr--focus');
  };

  const handleBlur = () => {
    wrapRef.current?.classList.remove('filed__wr--focus');
  };

  return (
    <Filed label={label} errorMessageRef={errorMessageRef} wrapRef={wrapRef}>
      <Select
        selectRef={selectRef}
        options={options}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
    </Filed>
  );
};

export default FiledSelect;
