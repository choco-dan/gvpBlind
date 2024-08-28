import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios';
import styles from './profilepage.module.css';
import userImg from './assets/userimage.png';
import Card from "../Card/card.jsx";
import cardstyle from "../Card/card.module.css";

function UserProfile() {
    const { usermail } = useContext(UserContext);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('Posts');
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const getUser = async () => {
        console.log("getting user");
        const userdata = await axios.get(`http://localhost:7575/users/${usermail}`);
        setUser(userdata.data);
        console.log(userdata);
    };

    const getPosts = async () => {
        console.log("getting post");
        const postresponse = await axios.get(`http://localhost:7575/posts/${usermail}`);
        setPosts(postresponse.data);
        console.log(postresponse);
    };

    useEffect(() => {
        getUser();
        getPosts();
    }, []);

    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location.state?.activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case 'Posts':
                return (
                    <div className={styles.content}>
                        {posts.map((post, index) => (
                            <Card
                                key={index}
                                id={cardstyle.card}
                                postid={post._id}
                                username={post.username}
                                time={post.timespan}
                                branch={post.branch}
                                year={post.year}
                                para={post.post}
                                title={post.title}
                                likes={post.likes}
                            />
                        ))}
                    </div>
                );
            case 'Comments':
                return <div className={styles.content}>User's Comments will be displayed here.</div>;
            case 'Likes':
                return <div className={styles.content}>User's Liked posts will be displayed here.</div>;
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
                        <p className={styles.info}>{user.username}</p>
                        <p className={styles.info}>{user.usermail}</p>
                    </div>
                    <div className={styles.infoby}>
                        <p className={styles.info}>{user.branch}</p>
                        <p className={styles.info}>{user.year}</p>
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
                <br /><br />
            </div>
        </>
    );
}

export default UserProfile;
