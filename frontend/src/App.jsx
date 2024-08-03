import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import HomePage from './HomePage/HomePage.jsx';
import SignupPage from './SignupPage/SignupPage.jsx';
import Login from "./Login/Login.jsx";
import NotFound from "./notFound.jsx";
import LandingPage from "./lp/lp.jsx";
import CommunityPage from './Community/CommunityPage.jsx'; 
import Sidebar from './sidebar/sidebar.jsx';
import Header from './Header/header.jsx'
import CreatePost from './postPage/postPage.jsx'
import './App.css';

const App = () => {
  const location = useLocation();
  const hideSidebarPaths = ['/','*','/Login','/SignupPage','/CreatePost','/login','signuppage'];
  const hideHeaderPaths = ['/','*','/Login', '/SignupPage','/login','/signuppage'];
  const [valid,setValid]=useState(false);
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);
  const login=()=>set
  return (
    <div className="app-container">
      {!shouldHideHeader && <Header />}
      {!shouldHideSidebar && <Sidebar />}
      
      <div>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/SignupPage" element={<SignupPage />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/Login" element={<Login />} />
              <Route path = "/CreatePost" element = {<CreatePost />} />
              <Route path="/community/:name" element={<CommunityPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};



export default App;
