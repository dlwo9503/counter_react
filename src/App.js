import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(); // 입력한 값
  const [numbers, setNumbers] = useState([0]); // 계산값 저장할 배열
  const numInput = useRef(null);

  useEffect(() => { numInput.current.focus(); })

  const add = () => {
    check() && setNumbers([...numbers.slice(0, index + 1), Number(numbers[index]) + Number(number)]);
    check() && setIndex(index + 1);
  };
  
  const sub = () => {
    check() && setNumbers([...numbers.slice(0, index + 1), Number(numbers[index]) - Number(number)]);
    check() && setIndex(index + 1);
  };
  
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const check = () => {
    setNumber(""); // input 태그 초기화
    if(isNaN(number) === false) return true;
  }

  return (
    <div className="container">
      <div id="valuebox" className="counter">{numbers[index]}</div>
      <input id="inputbox" className="input" onChange={onChange} value={number} ref={numInput}/>
      <div className="btnGroup">
        <button onClick={()=>{ setIndex(index - 1) }} id="undoButton" className="btn" disabled={index===0}>Undo</button>
        <button onClick={add} id="addButton" className="btn">+</button>
        <button onClick={sub} id="subButton" className="btn">-</button>
        <button onClick={()=>{ setIndex(index + 1) }} id="redoButton" className="btn" disabled={index===numbers.length - 1}>Redo</button>
      </div>
    </div>
  );
}

export default App;