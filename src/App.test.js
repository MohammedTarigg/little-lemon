import { render,screen,fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingPage from './Pages/BookingPage';

test('Form testing',() => {
  render(<Router><BookingPage /></Router>);
  const reserveButton = screen.getByLabelText(/First Name/i);
  expect(reserveButton).toBeInTheDocument();
});
