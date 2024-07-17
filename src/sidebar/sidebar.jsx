import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';
import feed from './assets/square-poll-horizontal.svg';
import poll from './assets/vote-yea.svg';

function Sidebar() {
  const industries = ['Tech', 'Financial Services', 'Healthcare', 'Gaming', 'E-commerce & Retail'];
  const branches = ['CSE', 'CSM', 'CSD', 'IT', 'ECE', 'EEE', 'Mech', 'Civil', 'Chemical'];
  const generalTopics = ['Ask Gvp', 'Cars', 'Artificial Intelligence', 'Vizag',
                         'Misc.', 'India', 'Politics','Relationships', 'Memes',
                        'Movies', 'Anime', 'Cricket'];

  return (
    <div className={styles.sidebar}>
      <div className={styles.unscroll}>
        <div className={styles.feed}>
          <img className={styles.feedicon} src={feed} alt='feed' />
          <Link className={styles.feeda} to="/HomePage">&nbsp;Feed</Link>
        </div>
        <div className={styles.poll}>
          <img className={styles.pollicon} src={poll} alt='poll' />
          <Link className={styles.polla} to="/polls">&nbsp;Polls</Link>
        </div>
      </div>
      <div className={styles.scrollable}>
        <div className={styles.industries}>
          <h3>Industries</h3>
          {industries.map(industry => (
            <Link key={industry} to={`/community/${industry}`}>{industry}</Link>
          ))}
        </div>
        <div className={styles.branches}>
          <h3>Branch groups</h3>
          {branches.map(branch => (
            <Link key={branch} to={`/community/${branch}`}>{branch}</Link>
          ))}
        </div>
        <div className={styles.general}>
          <h3>General Topics</h3>
          {generalTopics.map(topic => (
            <Link key={topic} to={`/community/${topic}`}>{topic}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
