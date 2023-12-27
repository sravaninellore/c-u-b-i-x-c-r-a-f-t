// BMICalculationPage.js
import React, { useState } from "react";

const BMICalculationPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    // Reset error message
    setError("");

    // Validation
    const validWeight = parseFloat(weight);
    const validHeight = parseFloat(height);

    if (
      !isNaN(validWeight) &&
      !isNaN(validHeight) &&
      validWeight >= 1.0 &&
      validWeight <= 300.0 &&
      validHeight >= 0.1 &&
      validHeight <= 3.0
    ) {
      const bmiResult = (validWeight / Math.pow(validHeight, 2)).toFixed(1);
      setBMI(bmiResult);
    } else {
      setBMI(null);
      setError("Invalid input. Please enter valid weight and height.");
    }
  };

  return (
    <div>
      <h2>BMI Calculation</h2>
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Height (m):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {bmi !== null && <p>Your BMI: {bmi}</p>}
    </div>
  );
};

export default BMICalculationPage;
