import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import BookingPage from "./Pages/BookingPage";
import ConfirmedBooking from "./Pages/ConfirmedBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/Confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
