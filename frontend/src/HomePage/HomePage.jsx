import Card from '../Card/card.jsx';
import styles from './homepage.module.css';
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext.jsx';
import Notification from './Notification.jsx';
import InViewComponent from '../InViewComponent.jsx';
import { motion, AnimatePresence } from 'framer-motion';

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const { usermail, setUsermail } = useContext(UserContext);
  const [feed, setFeed] = useState([]);

  const getFeed = async () => {
    const feedresponse = await axios.post("http://localhost:3000/feed", { usermail: usermail });
    console.log(feedresponse.data);
    setFeed(feedresponse.data);
  }

  useEffect(() => {
    const storedUsermail = localStorage.getItem('usermail');
    if (storedUsermail) {
      setUsermail(storedUsermail);
    }
    getFeed();
  }, [usermail, setUsermail]);

  useEffect(() => {
    if (location.state && location.state.showNotification) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        navigate(location.pathname, { replace: true, state: {} })
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const navigateToCreatePost = () => {
    navigate("/CreatePost", { state: usermail });
  }

  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 }
  };

  return (
    <>
      <Notification
        message='Post pushed successfully'
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <motion.div 
        className={styles.postbtn}
        initial="hidden" 
        animate="visible" 
        exit="exit"
        variants={buttonVariants}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        onClick={navigateToCreatePost}
      >
        Create a Post
      </motion.div>
      <motion.div 
        className='post-box'
        initial="hidden" 
        animate="visible" 
        exit="exit"
        variants={postVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <AnimatePresence>
          {
            feed.map((post, index) => (
              <InViewComponent key={index} variants={postVariants} index={index}>
                <Card
                  username={post.username}
                  time={post.timespan}
                  branch={post.branch}
                  year={post.year}
                  para={post.post}
                  title={post.title}
                />
              </InViewComponent>
            ))
          }
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default HomePage;
