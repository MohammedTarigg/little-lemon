import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import MenuPage from "./Pages/MenuPage";
import AboutPage from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUs";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/little-lemon" element={<HomePage />} />
          <Route path="/little-lemon/booking" element={<BookingPage />} />
          <Route path="/little-lemon/menu" element={<MenuPage />} />
          <Route path="/little-lemon/about" element={<AboutPage />} />
          <Route path="/little-lemon/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
