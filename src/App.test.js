import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Disable button and then enable ', () => {
  render(<App />);
  const checkbox= screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent.click(checkbox);
  const button = screen.getByRole('button');
  expect(button).toHaveStyle('background-color: gray')

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'red' })
});

test('Change color, disable, and then enable ', () => {
  render(<App />);
  const checkbox= screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(button).toHaveStyle({backgroundColor: 'blue' })

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray' })

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'blue' })
});