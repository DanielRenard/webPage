import React, { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const clickNumber = (num) => {
    if (isResultDisplayed) {
      setFirstNumber(num.toString());
      setSecondNumber('');
      setOperation('');
      setIsResultDisplayed(false);
      return;
    }

    if (!operation) {
      // Prevent multiple decimals
      if (num === '.' && firstNumber.includes('.')) return;
      setFirstNumber(firstNumber + num);
    } else {
      if (num === '.' && secondNumber.includes('.')) return;
      setSecondNumber(secondNumber + num);
    }
  };

  const clickOperator = (op) => {
    if (!firstNumber) return; // Prevent operator click without a first number

    if (isResultDisplayed) {
      setOperation(op);
      setIsResultDisplayed(false);
    } else if (secondNumber) {
      showResult();
      setOperation(op);
    } else {
      setOperation(op);
    }
  };

  const showResult = () => {
    let first = parseFloat(firstNumber);
    let second = parseFloat(secondNumber);
    let result = 0;

    if (operation === '/' && second === 0) {
      alert('Error: Division by zero');
      clearResult();
      return;
    }

    switch (operation) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;
      default:
        return;
    }

    setFirstNumber(result.toString());
    setSecondNumber('');
    setOperation('');
    setIsResultDisplayed(true);
  };

  const clearResult = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setIsResultDisplayed(false);
  };

  return (
    <div id="calculator-container">
      <div id="calculator">
        <div id="result">{firstNumber || secondNumber}</div>
        <div id="buttons">
          {[1, 2, 3, '+'].map((item, index) => (
            <button key={index} onClick={() => (item === '+' ? clickOperator(item) : clickNumber(item))}>
              {item}
            </button>
          ))}
          {[4, 5, 6, '-'].map((item, index) => (
            <button key={index} onClick={() => (item === '-' ? clickOperator(item) : clickNumber(item))}>
              {item}
            </button>
          ))}
          {[7, 8, 9, '/'].map((item, index) => (
            <button key={index} onClick={() => (item === '/' ? clickOperator(item) : clickNumber(item))}>
              {item}
            </button>
          ))}
          <button onClick={() => clickNumber(0)} className="button-wide">0</button>
          <button onClick={() => clickNumber('.')}>.</button>
          <button onClick={() => clickOperator('*')}>*</button>
          <button onClick={clearResult} className="button-wide">CLEAR</button>
          <button onClick={showResult} className="button-wide">=</button>
        </div>
      </div>

      <style jsx>{`
        #calculator-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-top: 10px;
          width: 100%;
          height: 90%;
        }

        #calculator {
          width: 90%;
          max-width: 400px;
          border: 5px solid rgb(160, 167, 160);
          border-radius: 10px;
          background: rgb(68, 68, 95);
          box-shadow: 0 8px 8px 0 rgb(0, 0, 0);
          padding: 1em;
        }

        #result {
          background: white;
          border: 5px solid rgb(160, 167, 160);
          text-align: right;
          font-size: 1.5rem;
          min-height: 2.5em;
          line-height: 2.5;
          padding-right: 0.5em;
        }

        #buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5em;
          padding: 1em;
        }

        button {
          background: rgb(2, 2, 54);
          color: ghostwhite;
          font-weight: bold;
          font-size: 1.2rem;
          padding: 1em;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .button-wide {
          grid-column: span 2;
        }
      `}</style>
    </div>
  );
};

export default Calculator;
