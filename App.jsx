import "./app.css";
import { useState } from "react";
import Component from "./components/Component";
function App() {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    setCount(count + value);
  };
  const changeMult = (value) => {
    setCount(count * value);
  };

  if (count > 10 && count<20) {
    return (
      <>
       <h1>Counter : {count}</h1>
        <h1 className="container">hello amit</h1>  <button onClick={() => changeCount(1)}>Inc</button>
      <button onClick={() => changeCount(-1)}>Dec</button>
      </>
    );
  }

  return (
    <div className="container">
      <h1>Counter : {count}</h1>
      <button onClick={() => changeCount(1)}>Inc</button>
      <button onClick={() => changeCount(-1)}>Dec</button>
      <button onClick={() => changeMult(2)}>Mult</button>
     <h1>counter is {count%2===0 && count>0  ? "EVEN":"ODD"}</h1>
    </div>
  );
}

export default App;
