import { render, screen } from '@testing-library/react';
import App from './App';

test('header is rendered', () => {
  render(<App />);
  const translationHeader = screen.getByText("Cloudn8-Transl8")
  expect(translationHeader).toBeInTheDocument();
});

test('Show initial list of languages', () => {

  render(<App />)

  //TODO
})

test('Load list of languages from the API', () => {

})

test('Show translation', () => {
  
})