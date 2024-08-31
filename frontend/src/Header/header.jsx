import React, { useState, useRef,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import logo from './assets/user.svg';
import post from './assets/script.svg';
import dots from './assets/menu-dots.svg';
import { FaFeatherAlt } from 'react-icons/fa';
import { UserContext } from '../UserContext';
function Header() {
    const profileMenu = ['PROFILE', 'LOGOUT'];
    const postMenu = ['POSTS', 'LIKES', 'COMMENTS'];
    const dotsMenu = ['ABOUT', 'POLICY'];
    const [openProfile, setOpenProfile] = useState(false);
    const [openPost, setOpenPost] = useState(false);
    const [openDots, setOpenDots] = useState(false);
    const {usermail} = useContext(UserContext);
    const navigate = useNavigate();
    const profileMenuRef = useRef();
    const profileRef = useRef();
    const postMenuRef = useRef();
    const postRef = useRef();
    const dotsMenuRef = useRef();
    const dotsRef = useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== profileMenuRef.current && e.target !== profileRef.current) {
            setOpenProfile(false);
        }
    });
    window.addEventListener('click', (e) => {
        if (e.target !== postMenuRef.current && e.target !== postRef.current) {
            setOpenPost(false);
        }
    });
    window.addEventListener('click', (e) => {
        if (e.target !== dotsMenuRef.current && e.target !== dotsRef.current) {
            setOpenDots(false);
        }
    });

    const handleRefresh = () => {
        navigate('/HomePage', { replace: true });
        window.location.reload();
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const handleTabClick = (tab) => {
        navigate('/profile', { state: { activeTab: tab } });
    };
    const navigateToCreatePost = () => {
        navigate("/CreatePost", { state: usermail });
      };

    return (
        <>
            <div className={styles.x}>
                <h1 onClick={handleRefresh} className={styles.name}>blinder</h1>
                    <div className={styles.postbtn} onClick={navigateToCreatePost}>
                        <FaFeatherAlt className="icon" />
                        Write a post
                    </div>                
                    <div className={styles.options}>
                    <div className={styles.button} onClick={() => { setOpenProfile(!openProfile); }}>
                        <img ref={profileRef} className={styles.usericon} src={logo} alt='user' />
                    </div>
                    <div className={styles.button} onClick={() => { setOpenPost(!openPost); }}>
                        <img ref={postRef} className={styles.post} src={post} alt='post' />
                    </div>
                    <div className={styles.button} onClick={() => { setOpenDots(!openDots); }}>
                        <img ref={dotsRef} className={styles.dots} src={dots} alt='about' />
                    </div>
                </div>
            </div>

            {openProfile && (
                <div ref={profileMenuRef} className={styles.dropdownprofile}>
                    <ul>
                        {profileMenu.map((menu, index) => (
                            <li onClick={() => {
                                setOpenProfile(false);
                                if (menu === 'LOGOUT') {
                                    handleLogout();
                                }
                            }} className={styles.dropdownitem} key={index}>
                                {index === 0 ? (
                                    <Link to="/profile">{menu}</Link>
                                ) : (
                                    menu
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {openPost && (
                <div ref={postMenuRef} className={styles.dropdownpost}>
                    <ul>
                        {postMenu.map((menu, index) => (
                            <li
                                onClick={() => {
                                    setOpenPost(false);
                                    handleTabClick(menu);
                                }}
                                className={styles.dropdownitem}
                                key={index}
                            >
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {openDots && (
                <div ref={dotsMenuRef} className={styles.dropdowndots}>
                    <ul>
                        {dotsMenu.map((menu, index) => (
                            <li onClick={() => setOpenDots(false)} className={styles.dropdownitem} key={index}>
                                {menu === 'POLICY' ? (
                                    <Link to="/policy">{menu}</Link>
                                ) : menu === 'ABOUT' ? (
                                    <Link to="/about">{menu}</Link>
                                ) : (
                                    menu
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
