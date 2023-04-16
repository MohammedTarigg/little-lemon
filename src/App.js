import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;
