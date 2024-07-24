import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [name, setName] = useState("Jhon Doe");

  useEffect(() => {
    async function getName() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setName(`${data.results[0].name.first} ${data.results[0].name.last}`);
      } catch (error) {
        console.error(error);
      }
    }

    getName();
  }, []);

  return (
    <>
      <Header name={name} />
      <Card name={name} />;
    </>
  );
}

export default App;
