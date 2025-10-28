// src/components/CounterApp.jsx
import { useEffect, useState } from "react";

function CounterApp() {
  const [count, setcount] = useState(0);
  const [deccountstate, setdeccoutstate] = useState(0);

  const plusCount = () => {
    console.log("plus Button is clicked");
    setcount(count + 1);
  };

  const decCount = () => {
    console.log("decrement Button is clicked");
    setdeccoutstate(deccountstate - 1);
  };

  useEffect(() => {
    console.log("called->dependent useEffect");
  }, [count, deccountstate]);

  return (
    <div>
      <h1>useEffect Explanation</h1>
      <button
        onClick={plusCount}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "12px",
          marginRight: "8px",
        }}
      >
        Increment by 1
      </button>
      <button
        onClick={decCount}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "12px",
        }}
      >
        Decrement By 1
      </button>
      <p><b>Total Plus:</b> {count}</p>
      <p><b>Total Decrement:</b> {deccountstate}</p>
    </div>
  );
}

export default CounterApp;