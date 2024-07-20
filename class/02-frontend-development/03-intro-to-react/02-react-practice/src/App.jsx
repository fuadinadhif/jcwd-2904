import styled from "styled-components";

import Profile from "./components/Profile";

function App() {
  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 10px;
  padding: 20px;
  width: fit-content;
  background-color: hsl(0, 0%, 25%);
`;

export default App;
