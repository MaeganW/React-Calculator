import React, { useState, useEffect } from "react";
import ButtonRow from "./ButtonRow";

function Calculator() {
  const [displayAmount, setDisplayAmount] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [activeOperator, setActiveOperator] = useState(null);
  const [disabledOperators, setDisabledOperators] = useState(false);
  const [previousOperator, setPreviousOperator] = useState(null);
  const [disableCalculate, setDisableCalculate] = useState(true);

  useEffect(() => {
    toggleDisabled();
    if (activeOperator === "=") {
      console.log("calculating...");
      calculate();
    } else {
      setPreviousOperator(activeOperator);
    }
  }, [activeOperator]);

  useEffect(() => {
    console.log(`Calculated amount is ${calculatedAmount}`);
  }, [calculatedAmount]);

  const buttons = [[7, 8, 9, "x"], [4, 5, 6, "+"], [1, 2, 3, "-"]];

  function updateOperation(operation) {
    if (calculatedAmount === 0) {
      setCalculatedAmount(displayAmount);
    }
    setActiveOperator(operation);

    if (operation !== "=") {
      setDisplayAmount("");
    }
  }

  function updateDisplay(amount) {
    amount.toString();
    setDisplayAmount(displayAmount + amount);
  }

  function calculate() {
    let prevAmount = Number.parseFloat(calculatedAmount);
    let inputAmount = Number.parseFloat(displayAmount);
    let calcAmt = 0;
    if (previousOperator === "-") {
      calcAmt = prevAmount - inputAmount;
    } else if (previousOperator === "+") {
      calcAmt = prevAmount + inputAmount;
    } else if (previousOperator === "/") {
      calcAmt = prevAmount / inputAmount;
    } else {
      calcAmt = prevAmount * inputAmount;
    }
    setCalculatedAmount(calcAmt);
    setDisplayAmount(calcAmt);
  }

  function clear() {
    setCalculatedAmount(0);
    setDisplayAmount("");
  }

  function toggleDisabled() {
    if (!activeOperator) {
      return;
    }
    if (activeOperator !== "=") {
      setDisableCalculate(false);
      return setDisabledOperators(true);
    }
    setDisableCalculate(true);
    return setDisabledOperators(false);
  }

  const buttonRows = buttons.map(function(row, i) {
    const buttonProps = {
      row,
      disabledOperators,
      updateOperation,
      updateDisplay
    };
    return <ButtonRow key={i} {...buttonProps} />;
  });

  return (
    <div className="calculator">
      <div className="calculator__display">
        <p>{displayAmount}</p>
      </div>
      <div className="calculator__row">
        <button className="calculator__row-clear" onClick={() => clear()}>
          Clear
        </button>
        <button
          className="calculator__row-btn"
          onClick={() => updateOperation("/")}
          disabled={disabledOperators}
        >
          /
        </button>
      </div>
      {buttonRows}
      <div className="calculator__row">
        <button
          className="calculator__row-zero"
          onClick={() => updateDisplay(0)}
        >
          0
        </button>
        <button
          className="calculator__row-btn"
          onClick={() => updateDisplay(".")}
        >
          .
        </button>
        <button
          className="calculator__row-btn"
          onClick={() => updateOperation("=")}
          disabled={disableCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
