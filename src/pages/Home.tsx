import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  let [counter, setCounter] = React.useState(0);
  const [value, setValue] = React.useState("");

  const increment = () => {
    setCounter(counter++);
  };

  const decrement = () => {
    setCounter(counter--);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      setValue(value);
    }
  };

  return (
    <div style={{ display: "block" }}>
      <h1>again</h1>
      <p>This is the home page.</p>

      <input type="text" value={value} onChange={handleChange} />

      <div style={{ display: "flex", padding: "20px", alignItems: "center", gap: "20px" }}>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>

      <div>
        <Link to="/setting">Go to setting page</Link>
      </div>
      <Link to="/profile">Go to profile page</Link>
    </div>
  );
}
