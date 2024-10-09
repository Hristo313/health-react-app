import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import HealthIndicators from './health-indicators';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders HealthIndicators component', () => {
  const wrapper = render(<HealthIndicators />);
  expect(wrapper).toBeTruthy();
});