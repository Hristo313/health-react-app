import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './home';
import 'element-internals-polyfill';

test('renders Home component', () => {
  const wrapper = render(<Home />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});