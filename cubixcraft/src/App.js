// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import BMICalculationPage from "./BMICalculationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bmi" element={<BMICalculationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
