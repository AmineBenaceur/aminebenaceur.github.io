import React,{useState} from "react";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage  from "./pages/AboutPage"
import ResumePage from "./pages/ResumePage";
import ContactPage  from "./pages/ContactPage"
import ProjectsPage  from "./pages/ProjectsPage"
import { Route,Switch as Switching } from 'react-router'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

      <MainContentStyled>


      <Switching>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route> 
        <Route path="/resume" exact>
          <ResumePage />
        </Route> 
        <Route path="/contact" exact>
          <ContactPage />
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
