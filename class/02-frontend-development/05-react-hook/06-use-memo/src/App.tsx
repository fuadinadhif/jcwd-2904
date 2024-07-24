import { useState, useEffect, useMemo } from "react";

import "./App.css";

function App() {
  const [range, setRange] = useState(10);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                            Before Using useMemo                            */
  /* -------------------------------------------------------------------------- */
  // const allPrimes = [];

  // for (let counter = 2; counter < range; counter++) {
  //   if (isPrime(counter)) allPrimes.push(counter);
  // }
  /* ----------------------- End of Before Using useMemo ---------------------- */

  const allPrimes = useMemo(() => {
    const result = [];

    for (let counter = 2; counter < range; counter++) {
      if (isPrime(counter)) result.push(counter);
    }

    return result;
  }, [range]);

  return (
    <>
      <p>{String(time)}</p>
      <form>
        <label htmlFor="num" style={{ marginRight: "12px" }}>
          Your Number:
        </label>
        <input
          type="number"
          id="num"
          value={range}
          onChange={(event) => setRange(event.target.value)}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {range}
      </p>
      <p>{allPrimes.join(", ")}</p>
    </>
  );
}

function isPrime(n: number) {
  console.info("isPrime is running!");

  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) return true;

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) return false;
  }

  return true;
}

export default App;
