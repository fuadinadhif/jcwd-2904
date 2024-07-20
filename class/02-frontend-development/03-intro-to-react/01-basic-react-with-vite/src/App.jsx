import "./App.css";
import { Header } from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const person = {
    name: "Jhonny",
    email: "jhonjon@gmail.com",
  };

  return (
    <>
      <Header />
      <Profile name={person.name} email={person.email} age="75" />
    </>
  );
}

export default App;
