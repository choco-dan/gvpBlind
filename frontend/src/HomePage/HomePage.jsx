import Card from '../Card/card.jsx';
import styles from './homepage.module.css';
import '../App.css';
import plus from './assets/add.svg';
import searchIcon from './assets/search-icon.svg';
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
  const [filteredFeed, setFilteredFeed] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getFeed = async () => {
    const feedresponse = await axios.post("https://gvpblind.onrender.com/feed", { usermail: usermail });
    setFeed(feedresponse.data);
    setFilteredFeed(feedresponse.data); 
  };

  const likePost = async (id) => {
    await axios.put(`https://gvpblind.onrender.com/post/likes/${id}`);
    getFeed();
  };

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
        navigate(location.pathname, { replace: true, state: {} });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = feed.filter(post => 
      post.title.toLowerCase().includes(term) || 
      post.post.toLowerCase().includes(term) ||
      post.username.toLowerCase().includes(term)
    );
    setFilteredFeed(filtered);
  };

  const navigateToCreatePost = () => {
    navigate("/CreatePost", { state: usermail });
  };

  const postVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <div className={styles.homeps}>
        <Notification
          message='Post pushed successfully'
          show={showNotification}
          onClose={() => setShowNotification(false)}
        />

       {/* <motion.div
          className={styles.postCont}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={buttonVariants}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          onClick={navigateToCreatePost}
        >
          <img className={styles.plusicon} src={plus} alt='post ' />
          <input
            className={styles.postin}
            type="text"
            placeholder="Start a post......"
          />
        </motion.div> */}

        <motion.div
            className={styles.searchmotion}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
            <div className={styles.searchWrapper}>
              <div className={styles.inputContainer}>
                <img src={searchIcon} alt="search" className={styles.searchIcon} />
                <input
                  type="text"
                  className={styles.searchBar}
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </motion.div>


        <motion.div
          className='post-box'
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={postVariants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <AnimatePresence>
            {filteredFeed.map((post, index) => (
              <InViewComponent key={index} variants={postVariants} index={index}>
                <Card
                  username={post.username}
                  postid={post._id}
                  likes={post.likes}
                  time={post.timespan}
                  branch={post.branch}
                  year={post.year}
                  para={post.post}
                  title={post.title}
                  likePost={likePost}
                />
              </InViewComponent>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default HomePage;
