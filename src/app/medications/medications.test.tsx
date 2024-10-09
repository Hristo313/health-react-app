import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Medications from './medications';
import 'element-internals-polyfill';

test('renders Medications component', () => {
  const wrapper = render(<Medications />);
  expect(wrapper).toBeTruthy();
});