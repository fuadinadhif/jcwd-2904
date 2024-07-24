import { useState } from "react";
import Decoration from "./Decoration";

function Counter() {
  const [count, setCount] = useState(0);

  console.info("Counter Rendered");

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Decoration />
    </>
  );
}

export default Counter;
