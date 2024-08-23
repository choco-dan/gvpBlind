import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './sidebar.module.css';
import feed from './assets/square-poll-horizontal.svg';
import poll from './assets/vote-yea.svg';

const Sidebar = () => {
  const industries = ['Tech', 'Financial Services', 'Healthcare', 'Gaming', 'E-commerce & Retail'];
  const branches = ['CSE', 'CSM', 'CSD', 'IT', 'ECE', 'EEE', 'Mech', 'Civil', 'Chemical'];
  const generalTopics = ['Ask Gvp', 'Cars', 'AI', 'Vizag',
                         'Misc.', 'India', 'Politics','Relationships', 'Memes',
                        'Movies', 'Anime', 'Cricket'];

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: -250 },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
      }
    }
  };

  // Link animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <motion.div
      className={styles.sidebar}
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className={styles.unscroll}>
        <Link className={styles.feed} to="/HomePage">
          <img className={styles.feedicon} src={feed} alt='feed' />
          <motion.p
            className={styles.feeda}
            to="/HomePage"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            &nbsp;Feed
          </motion.p>
        </Link>
        <Link className={styles.poll} to='/polls'>
          <img className={styles.pollicon} src={poll} alt='poll' />
          <motion.p
            className={styles.polla}
            to="/polls"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            &nbsp;Polls
          </motion.p>
        </Link>
      </div>
      <div className={styles.scrollable}>
        <div className={styles.industries}>
          <h3>Industries</h3>
          {industries.map(industry => (
            <motion.div
              key={industry}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/community/${industry}`}>{industry}</Link>
            </motion.div>
          ))}
        </div>
        <div className={styles.branches}>
          <h3>Branch groups</h3>
          {branches.map(branch => (
            <motion.div
              key={branch}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/community/${branch}`}>{branch}</Link>
            </motion.div>
          ))}
        </div>
        <div className={styles.general}>
          <h3>General Topics</h3>
          {generalTopics.map(topic => (
            <motion.div
              key={topic}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/community/${topic}`}>{topic}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
