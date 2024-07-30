import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const [angka, tambahAngka, kurangiAngka] = useCounter(0, 5);

  return (
    <>
      <h1>{angka}</h1>
      <button style={{ marginRight: "24px" }} onClick={tambahAngka}>
        Tambah
      </button>
      <button onClick={kurangiAngka}>Kurang</button>
    </>
  );
}

export default App;
