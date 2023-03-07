import React, { useState } from 'react';
import "./Counter.css"

const Counter = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);

  const clickDown = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  const clickUp = () => {
    if (counter !== stock) {
      setCounter(counter + 1);
    }
  };
  return (
    <div className='contador'>
      <button className='button1' onClick={clickDown}>-</button>
      {counter}
      <button className='button2' onClick={clickUp}>+</button>
      <button type="button" className="btn btn-dark button3" disabled={counter === 0 || stock === 0} onClick={() => onAdd(counter)}>Agregar al Carrito</button>
    </div>
  );
};
export default Counter;

