// BMICalculationPage.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BMICalculationPage from "./BMICalculationPage";

test("calculate BMI correctly", () => {
  render(<BMICalculationPage />);

  // Mock user input
  fireEvent.change(screen.getByLabelText(/weight/i), {
    target: { value: "70" },
  });
  fireEvent.change(screen.getByLabelText(/height/i), {
    target: { value: "1.75" },
  });

  // Trigger BMI calculation
  fireEvent.click(screen.getByText(/calculate bmi/i));

  // Check if alert is called
  expect(window.alert).toHaveBeenCalledWith(
    expect.stringContaining("Your BMI:")
  );
});
