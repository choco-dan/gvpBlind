import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './profilepage.module.css';
import userImg from './assets/userimage.png';

function UserProfile() {
    const [activeTab, setActiveTab] = useState('Posts');

    const renderContent = () => {
        switch (activeTab) {
            case 'Posts':
                return <div className={styles.content}>User's Posts will be displayed here.</div>;
            case 'Comments':
                return <div className={styles.content}>User's Comments will be displayed here.</div>;
            case 'Likes':
                return <div className={styles.content}>User's Settings will be displayed here.</div>;
            default:
                return null;
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.profilebody}>
                    <div className={styles.image}>
                        <img className={styles.userimg} src={userImg} alt="userimg" />
                    </div>
                    <div className={styles.userdetails}>
                        <p className={styles.info}>Username</p>
                        <p className={styles.info}>Email ID</p>
                    </div>
                    <div className={styles.infoby}>
                       <p className={styles.info}>Branch</p>
                       <p className={styles.info}>Year</p>
                    </div>
                </div>

                <div className={styles.navbar}>
                    <div className={styles.navbuttons}>
                        <button
                            className={activeTab === 'Posts' ? styles.activeTab : ''}
                            onClick={() => setActiveTab('Posts')}
                        >
                            Posts
                        </button>
                        <button
                            className={activeTab === 'Comments' ? styles.activeTab : ''}
                            onClick={() => setActiveTab('Comments')}
                        >
                            Comments
                        </button>
                        <button
                            className={activeTab === 'Likes' ? styles.activeTab : ''}
                            onClick={() => setActiveTab('Likes')}
                        >
                            Likes
                        </button>
                    </div>

                    <motion.div
                        className={styles.tabContent}
                        key={activeTab}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 1 }}
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;