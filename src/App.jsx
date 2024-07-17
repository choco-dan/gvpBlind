import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import HomePage from './HomePage/HomePage.jsx';
import SignupPage from './SignupPage/SignupPage.jsx';
import Login from "./Login/Login.jsx";
import NotFound from "./notFound.jsx";
import LandingPage from "./lp/lp.jsx";
import CommunityPage from './Community/CommunityPage'; 
import Sidebar from './sidebar/sidebar.jsx';
import Header from './Header/header.jsx'
import './App.css';

const App = () => {
  const location = useLocation();
  const hidePaths = ['/'];

  const shouldHideSidebar = hidePaths.includes(location.pathname);
  const shouldHideHeader = hidePaths.includes(location.pathname);

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
