import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Emergency from './emergency';
import 'element-internals-polyfill';

test('renders Emergency component', () => {
  const wrapper = render(<Emergency />);
  expect(wrapper).toBeTruthy();
});