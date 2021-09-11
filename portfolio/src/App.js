import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./components/pages/HomePage";
import { Route,Switch as Switching } from 'react-router'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>

      <HomePage />

      <Switching>
        <Route path="/" exact>

        </Route>
      </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;

  }
`;
export default App;
