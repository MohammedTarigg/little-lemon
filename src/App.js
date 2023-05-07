import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import MenuPage from "./Pages/MenuPage";
import AboutPage from "./Pages/AboutPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
