import React, { useState, useEffect } from 'react';
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
import PolicyPage from './Header/header-dots/policyPage.jsx'
import AboutPage from './Header/header-dots/aboutPage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Footer from './Footer/Footer.jsx';
import './App.css';

const App = () => {
  const location = useLocation();
  const [isNotFound, setIsNotFound] = useState(false);
  const hideSidebarPaths = ['/', '*', '/Login', '/SignupPage', '/CreatePost', '/login', '/signuppage', '/profile', '/policy', '/about'];
  const hideHeaderPaths = ['/', '*', '/Login', '/SignupPage', '/login', '/signuppage'];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname) || isNotFound;
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname) || isNotFound;

  const pageTransition = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  };

  return (
    <div className="app-container">
      <div className="headersidebar">
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
              transition={{ duration: 0.4 }}
            >
              <Sidebar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className='routecont'>
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/SignupPage" element={<SignupPage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/HomePage" element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } />
              <Route path="/CreatePost" element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              } />
              <Route path="/Profile" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              } />
              <Route path="/community/:name" element={
                <ProtectedRoute>
                  <CommunityPage />
                </ProtectedRoute>
              } />
              <Route path="/policy" element={<PolicyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound setIsNotFound={setIsNotFound} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
