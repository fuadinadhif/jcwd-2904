// import {useEffect} from "react"
import React from "react";

import "./App.css";

function App() {
  // const [user, setUser] = React.useState(null);
  const [changeUser, setChangeUser] = React.useState(0);

  React.useEffect(() => {
    async function getList() {
      try {
        // const response = await fetch("https://randomuser.me/api/");
        // const data = await response.json();
        // setUser(data);
      } catch (error) {
        console.error(error);
      }
    }

    getList();
  }, [changeUser]);

  return (
    <>
      {/* <h1>{user ? user.results[0].name.first : "Loading..."}</h1> */}
      <button onClick={() => setChangeUser(changeUser + 1)}>Change User</button>
    </>
  );
}

export default App;
