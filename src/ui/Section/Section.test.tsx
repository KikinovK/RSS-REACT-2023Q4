import React from 'react';
import { render } from '@testing-library/react';
import Section from './Section';

it('renders children correctly', () => {
  const { getByText } = render(<Section>Test</Section>);
  expect(getByText('Test')).toBeInTheDocument();
});

it('applies classes correctly', () => {
  render(<Section classNames={['test-class']}>Test</Section>);
  const section = document.querySelector('.section');
  expect(section?.getAttribute('class')).toContain('test-class');
});

it('applies additional props correctly', () => {
  render(<Section id="test-id">Test</Section>);
  const section = document.querySelector('#test-id');
  expect(section).toBeInTheDocument();
});
