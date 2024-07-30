import { useState, useCallback } from "react";

import "./App.css";
import MegaBoost from "./components/MegaBoost";

function App() {
  const [count, setCount] = useState(0);

  const handleMegaBoost = useCallback(() => {
    setCount(() => count + 10);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Small Boost</button>
      </div>
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}

export default App;
