import { render } from '@testing-library/react';
import App from './App';

test('renders the app without error', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});
