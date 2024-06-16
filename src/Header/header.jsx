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
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.x}>
            <div className={styles.name}>gvpBlind</div>
            <div className={styles.options}>
                <div className={styles.wrapper}>
                    <div className={styles.button} onClick={() => { setOpen((prev)=>!prev); }}>
                        <img className={styles.usericon} src={logo} alt='user' />
                    </div>
                    { 

                    
                    <div className={styles.dropdownmenu} >
                        <ul>
                            <DropDownItem text='my profile' />
                            <DropDownItem text='settings' />
                            <DropDownItem text='Logout' />
                        </ul>
                    </div>
}
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.button}>
                        <img className={styles.post} src={post} alt='post' />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.button}>
                        <img className={styles.dots} src={dots} alt='about' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;
