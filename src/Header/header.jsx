import React, { useState } from 'react';
import styles from './header.module.css';
import logo from './assets/user.svg';
import post from './assets/script.svg';
import dots from './assets/menu-dots.svg';

function DropDownItem({ text }) {
    return (
        <li className={styles.dropdownitem}>
            <a>{text}</a>
        </li>
    );
}

function Header() {
    const [openProfile, setOpenProfile] = useState(false);
    const [openPost, setOpenPost] = useState(false);
    const[openDots, setOpenDots] = useState(false)
    return (
        <>
        <div className={styles.x}>
            <div className={styles.name}>gvpBlind</div>
            <div className={styles.options}>
                <div className={styles.wrapper}>
                    <div className={styles.button} onClick={() => { setOpenProfile(!openProfile); }}>
                        <img className={styles.usericon} src={logo} alt='user' />
                    </div>
                   
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.button} onClick = {()=>{setOpenPost(!openPost)}}>
                        <img className={styles.post} src={post} alt='post' />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.button} onClick = {()=>{setOpenDots(!openDots)}}>
                        <img className={styles.dots} src={dots} alt='about' />
                    </div>
                </div>
             
            </div>
            
         
        </div>
           {openProfile && (
            <div className={styles.dropdownprofile}>
                <ul>
                    <DropDownItem text='Profile' />
                    <DropDownItem text='Settings' />
                    <DropDownItem text='Logout' />
                </ul>
            </div>
        )}
            {openPost && (
            <div className={styles.dropdownpost}>
                <ul>
                    <DropDownItem text='New Post' />
                    <DropDownItem text='Edit Post'/>
                    <DropDownItem text='Delete Post'/>
                </ul>
            </div>
        )}
            {openDots && (
            <div className={styles.dropdowndots}>
                <ul>
                    <DropDownItem text='Aboout' />
                    <DropDownItem text='Privacy policy' />
                    <DropDownItem text='License' />
                </ul>
            </div>
        )}
        
        
        </>
    );

        
}

export default Header;
