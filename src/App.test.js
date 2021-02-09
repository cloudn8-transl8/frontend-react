import { render, screen } from '@testing-library/react';
import App from './App';

test('header is rendered', () => {
  render(<App />);
  const translationHeader = screen.getByText("Cloudn8-Transl8")
  expect(translationHeader).toBeInTheDocument();
});
