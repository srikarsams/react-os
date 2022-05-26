import { render } from '@testing-library/react';
import Index from 'pages/index';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default.json';

test('renders index page', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  );
  const h1 = getByText('Good day to learn nextjs');
  expect(h1).toBeDefined();
});
