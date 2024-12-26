import { useState } from "react";
import "./styles.css";

const min = 0;
let max = 100;

export default function App() {
  const [left, setLeft] = useState(20);
  const [right, setRight] = useState(20);
  const [lastRight, setLastRight] = useState(20);

  function changeValue(e) {
    const value = e.currentTarget.value;
    if (value > right) return;
    setLeft(value);
    max = right;
  }

  function changeRightValue(e) {
    const val = +e.target.value;
    let optionArray = [20, 50, 70];
    const isFound = optionArray.findIndex((item) => item === val);
    setRight(val);
    console.log(isFound);
    if (isFound >= 0) {
      setLastRight(val);
      max = val;
    }

    if (lastRight && left > lastRight) {
      setLeft(val);
      max = lastRight;
    }
  }

  function changeRightRange(e) {
    if (lastRight !== right) {
      setRight(lastRight);
    }
    console.log(left, "left");
    if (left > lastRight) {
      setLeft(lastRight);
      max = lastRight;
    }
  }

  function changeLeftRange(e) {
    if (left > right) {
      setLeft(right);
      max = right;
    }
  }

  return (
    <div>
      <input
        type="range"
        name="quantity"
        min={min}
        max={max}
        onInput={changeValue}
        value={left}
      />
      <output for="quantity">{left}</output>
      <span> to </span>
      <select
        onChange={changeRightValue}
        value={right}
        onBlur={changeRightRange}
      >
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="70">70</option>
      </select>
      <br />
      <br />

      <input value={left} onInput={changeValue} onBlur={changeLeftRange} />
      <span> to </span>
      <input
        value={right}
        onInput={changeRightValue}
        onBlur={changeRightRange}
      />
      <br />
      <br />

      <div>Range is 50 to 50</div>
    </div>
  );
}
