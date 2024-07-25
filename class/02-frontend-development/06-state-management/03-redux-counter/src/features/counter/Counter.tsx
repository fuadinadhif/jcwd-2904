import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Add By 1</button>
      <button onClick={() => dispatch(decrement())}>Subs By 1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Add By 10</button>
    </div>
  );
}

export default Counter;
