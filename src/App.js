import './App.css';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components'
import { Suspense, useState } from 'react';
import { WireSphere } from './components/sphere';
import Felix from './components/felix';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import AboutMe from './components/NavSection/aboutMe'
import Contact from './components/NavSection/contact'
import Projects from './components/NavSection/projects';
import Resume from './components/NavSection/resume';

const CanvasContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const NotFound = () => {
  return (
    <h1>404!!!!!!!!!!</h1>
  )
}

export const NavName = (props) => {
  const style = {
    textDecoration: "none",
    fontSize: "3rem"
  }
  
  return (
    <>
      <h1><NavLink to="" style={style} className={(navData) => (navData.isActive ? "active-style-green" : 'nav_name')} onClick={() => props.clickMe('green')}>Mason Porter-Brown</NavLink></h1>
    </>
  )
}

const NavItems = (props) => {
  const textStyle = {
    textDecoration: "none",
    fontSize: "1.7rem",
    paddingRight: "2rem"
  }

  const textStyleLast = {
    textDecoration: "none",
    fontSize: "1.7rem"
    }

  const navDiv = {
    display: "flex",
    alignSelf: "flex-start",
    justifyContent: "space-between"
  }
 
  return (
    <div style={navDiv}>
      <h2><NavLink to="/aboutme" style={textStyle} className={(navData) => (navData.isActive ? "active-style-blue" : 'about_me')}onClick={()=> props.clickMe("blue")}>About Me</NavLink></h2>
      <h2><NavLink to="/projects" style={textStyle} className={(navData) => (navData.isActive ? "active-style-red" : 'projects')} onClick={()=> props.clickMe("red")}>Projects</NavLink></h2>
      <h2><NavLink to="/resume" style={textStyle} className={(navData) => (navData.isActive ? "active-style-yellow" : 'resume')} onClick={()=> props.clickMe("yellow")}>Resume</NavLink></h2>
      <h2><NavLink to="/contact" style={textStyleLast} className={(navData) => (navData.isActive ? "active-style-purple" : 'contact')} onClick={()=> props.clickMe("purple")}>Contact</NavLink></h2> 
    </div>
  )
}  

const Router = (props) => {
  const style = {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    paddingLeft: "4rem",
    paddingTop: "4rem"
  }

  return (
    <div style={style}>
      <BrowserRouter>
      <NavName clickMe={props.clickMe}/>
      <NavItems clickMe={props.clickMe}/>
        <div>
          <Routes>
            {/* <Route exact path="/" component={Empty}/> */}
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route component={NotFound}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

function App() {
  const [color, setColor] = useState('green');

  const changeColor = (color) => {
    setColor(color);
  }

  return (
    <>
      <CanvasContainer>

        <Router clickMe={changeColor}/>

        <Canvas>
          <Suspense fallback={null}>
            <WireSphere color = {color}/>
            <Felix />
          </Suspense>
        </Canvas>

      </CanvasContainer>
    </>
  );
}

export default App;