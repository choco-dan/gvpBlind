import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './HomePage/HomePage.jsx';
import SignupPage from './SignupPage/SignupPage.jsx';
import Login from "./Login/Login.jsx";
import NotFound from "./notFound.jsx";
import LandingPage from "./lp/lp.jsx";
import CommunityPage from './Community/CommunityPage.jsx'; 
import Sidebar from './sidebar/sidebar.jsx';
import Header from './Header/header.jsx';
import CreatePost from './postPage/postPage.jsx';
import UserProfile from "./UserProfile/Profilepage.jsx";
import './App.css';

const App = () => {
  const location = useLocation();
  const [isNotFound, setIsNotFound] = useState(false);
  const hideSidebarPaths = ['/', '*', '/Login', '/SignupPage', '/CreatePost', '/login', '/signuppage', '/profile'];
  const hideHeaderPaths = ['/', '*', '/Login', '/SignupPage', '/login', '/signuppage'];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname) || isNotFound;
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname) || isNotFound;

  return (
    <div className="app-container">
      <AnimatePresence>
        {!shouldHideHeader && (
          <motion.div
            key="header"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!shouldHideSidebar && (
          <motion.div
            key="sidebar"
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -250 }}
            transition={{ duration: 0.3 }}
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/Profile" element={<UserProfile />} />
            <Route path="/community/:name" element={<CommunityPage />} />
            <Route path="*" element={<NotFound setIsNotFound={setIsNotFound} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
