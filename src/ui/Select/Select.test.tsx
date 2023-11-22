import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

it('selecting an option triggers the onSelected callback', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const mockOnSelected = vi.fn((value) => {
    console.log(value);
  });

  render(<Select value="" onSelected={mockOnSelected} options={options} />);

  const select = screen.getByRole('combobox');

  fireEvent.change(select, { target: { value: '2' } });

  expect(mockOnSelected).toHaveBeenCalledWith('2');
});

it('clicking on the select toggles the isOpen and isChange states', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const mockOnSelected = vi.fn();

  render(<Select value="" onSelected={mockOnSelected} options={options} />);

  const select = screen.getByRole('combobox');
  const iconSpan = document.querySelector('.select__icon');

  expect(iconSpan?.getAttribute('class')).not.toContain('select__icon--up');

  fireEvent.click(select);

  expect(iconSpan?.getAttribute('class')).toContain('select__icon--up');

  fireEvent.change(select);

  expect(iconSpan?.getAttribute('class')).not.toContain('select__icon--up');
});

it('blurring the select closes it', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const mockOnSelected = vi.fn();

  render(<Select value="" onSelected={mockOnSelected} options={options} />);

  const select = screen.getByRole('combobox');
  const iconSpan = document.querySelector('.select__icon');

  fireEvent.click(select);

  expect(iconSpan?.getAttribute('class')).toContain('select__icon--up');

  fireEvent.blur(select);

  expect(iconSpan?.getAttribute('class')).not.toContain('select__icon--up');
});
