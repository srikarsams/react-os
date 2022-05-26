import { render } from '@testing-library/react';
import Index from 'pages/index';

test('renders deploy link', () => {
  const { getByText } = render(<Index />);
  const h1 = getByText('Good day to learn nextjs');
  expect(h1).toBeDefined();
});
