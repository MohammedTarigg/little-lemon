import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/reservation/BookingForm";
import React,{ useState,useReducer } from "react"
import { fetchAPI,submitAPI } from "../api"
// import { useNavigate } from "react-router-dom";

function BookingPage() {
  const [date] = useState(new Date());
  const [confirmed,setConfirmed] = useState(false);

  function initializeTimes(date) {
    return fetchAPI(date)
  }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  // const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      // navigate("/confirmed");
      setConfirmed(true);
      console.log("submitted");
    }
  }

  function reducer(state,action) {
    let newState;
    switch (action.type) {
      case 'UPDATE_TIMES':
        let newDate = new Date(action.payload);
        newState = updateTimes(newDate)
        break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes,dispatch] = useReducer(reducer,initializeTimes(date));
  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} confirmed={confirmed} setConfirmed={setConfirmed} />
      <Footer />
    </>
  );
}

export default BookingPage;
