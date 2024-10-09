import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Appointments from './appointments';
import 'element-internals-polyfill';

test('renders Appointments component', () => {
  const wrapper = render(<Appointments />);
  expect(wrapper).toBeTruthy();
});