import HomePage from './HomePage/HomePage.jsx';
import SignupPage from './SignupPage/SignupPage.jsx';
import Login from "./Login/Login.jsx";
import NotFound from "./notFound.jsx";
import LandingPage from "./lp/lp.jsx"
import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
function App(){

  return(
    <>
        
          <Routes>
            <Route path = "/" element = {<LandingPage />} />
            <Route path="/SignupPage" element={<SignupPage/>} />
            <Route path="/HomePage" element={<HomePage/>}/>
            <Route  path='/Login' element={<Login/>}/>
            <Route path="*"  element={<NotFound/>}/>
          </Routes>
          <Routes >
          
          </Routes>
        
    </>
    

  
  );
}
export default App