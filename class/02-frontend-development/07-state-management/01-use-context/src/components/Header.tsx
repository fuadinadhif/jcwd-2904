import { useContext } from "react";
import { NameContext } from "../App";

function Header() {
  const name = useContext(NameContext);
  const firstName = name.split(" ")[0];
  return (
    <header>
      <h1>Logo</h1>
      <p>Hello, {firstName}!</p>
    </header>
  );
}

export default Header;
