import React, {useState} from 'react'
import styles from './header.module.css';
import logo from "./assets/user.svg";
import post from './assets/script.svg';
import dots from "./assets/menu-dots.svg"
import Profiledown from "./profiledown.jsx"
function Header(){

    const[openProfile, setOpenProfile] = useState(false);
    
    return(
        <>
        <div className = {styles.x}>
            <div className={styles.name}> gvpBlind</div>
            <div className = {styles.options}>
                <button className = {styles.button} onClick={()=>setOpenProfile((prev)=> !prev)}>
                <img className = {styles.usericon} src ={logo} alt = 'user' />
                </button>
                <button className = {styles.button}>
                    <img className = {styles.post} src={post} alt = 'post' />
                </button>
                <button className = {styles.button}>
                    <img className = {styles.dots} src = {dots} alt = 'about' />
                </button>
            </div>
        </div>
        {openProfile && <Profiledown />}
        </>
    )
}
export default Header