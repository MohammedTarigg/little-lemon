import { render,screen,fireEvent } from '@testing-library/react';
import BookingForm from './components/reservation/BookingForm';

describe("Booking form",() => {
  test('Form is not submitted if there is no data on required fields',() => {
    const handlesubmit = jest.fn();
    const dispatch = (state,action) => { return};
    const availableTimes = ['17:00','17:30','18:30','19:30','20:30','21:00','22:00','23:00'];

    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={handlesubmit} />);

    // const firstName = screen.getByLabelText(/First Name/i);
    const submitButton = screen.getByText("Reserve");

    // fireEvent.change(firstName,{ target: { value: "" } });
    fireEvent.click(submitButton);

    expect(handlesubmit).not.toHaveBeenCalled();
  });



}
)