import React from "react";

function ButtonRow(props) {
  const { row, disabledOperators, updateOperation, updateDisplay } = props;

  return (
    <div className="calculator__row">
      <button
        onClick={() => updateDisplay(row[0])}
        className="calculator__row-btn"
      >
        {row[0]}
      </button>
      <button
        onClick={() => updateDisplay(row[1])}
        className="calculator__row-btn"
      >
        {row[1]}
      </button>
      <button
        onClick={() => updateDisplay(row[2])}
        className="calculator__row-btn"
      >
        {row[2]}
      </button>
      <button
        onClick={() => updateOperation(row[3])}
        className="calculator__row-btn"
        disabled={disabledOperators}
      >
        {row[3]}
      </button>
    </div>
  );
}

export default ButtonRow;
