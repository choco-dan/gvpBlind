import HomePage from './HomePage/HomePage.jsx';
import SignupPage from './SignupPage/SignupPage.jsx';
import Login from "./Login/Login.jsx";
import NotFound from "./notFound.jsx";
import LandingPage from "./lp/lp.jsx"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {SwitchTransition, CSSTransition} from 'react-transition-group'
import './App.css'

function App(){

  const location = useLocation();

  return(
    <>
    <SwitchTransition component = {null}>
      <CSSTransition key = {location.pathname} className = "fade" timeout = {300} unmountOnExit>
           
      <Routes location = {location}>
            <Route path = "/" element = {<LandingPage />} />
            <Route path="/SignupPage" element={<SignupPage/>} />
            <Route path="/HomePage" element={<HomePage/>}/>
            <Route  path='/Login' element={<Login/>}/>
            <Route path="*"  element={<NotFound/>}/>
      </Routes>

      </CSSTransition>
    </SwitchTransition>
     
     
        
    </>
    

  
  );
}
export default App