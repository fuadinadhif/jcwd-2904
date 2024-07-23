// import { useReducer } from "react";

// import reducer from "./reducers/reducer";
// import "./App.css";

// const initialState = { name: "Kaesang", age: 29 };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <input
//         type="text"
//         value={state.name}
//         onChange={(event) =>
//           dispatch({
//             type: "CHANGED_NAME",
//             nextName: event.target.value,
//           })
//         }
//       />
//       <button onClick={() => dispatch({ type: "INCREMENT_AGE" })}>
//         Increment age
//       </button>
//       <p>
//         Hello, {state.name}. You are {state.age} years old.
//       </p>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState(true);

  return (
    <>
      <h1>{state ? "I am showing" : null}</h1>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Toggle Show
      </button>
    </>
  );
}
